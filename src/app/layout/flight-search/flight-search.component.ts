import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';
import { TravellerComponent } from '../traveller/traveller.component';
import { FlightSearchService } from 'src/app/services/flight-search.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatRadioChange } from '@angular/material/radio';

interface Travel {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['../../../scss/search.scss']
})
export class FlightSearchComponent implements OnInit {
  today = new Date()
  myForm: FormGroup | undefined;
  
  options: any;
  fromCityOptions: any;
  toCityOptions: any;
  
  favoriteSeason: string = 'One-way';
  types: string[] = ['One-way', 'Round-trip', 'Multi-city'];
  travels: Travel[] = [
    { value: 'economy', viewValue: 'Economy' },
    { value: 'premium-economy', viewValue: 'Premium Economy' },
    { value: 'business', viewValue: 'Business' },
    { value: 'first-class', viewValue: 'First Class' },
  ];
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 1;
  
  searchForm = new FormGroup({
    arr: this.formBuilder.array([this.createItem()]),
    travellersFormControl: new FormControl('', Validators.required),
    classFormControl: new FormControl('economy', Validators.required),
    departureFromDate: new FormControl(''),
    departureToDate: new FormControl(''),
  })
  
  
  store: any = '';
  previousDetails: any = {};
  locations: any = [];
  constructor(public dialog: MatDialog, private activatedRoute: ActivatedRoute, private _snackBar: MatSnackBar, private flightSearch: FlightSearchService, private date: DatePipe, private formBuilder: FormBuilder, private router: Router) { }
  
  async ngOnInit(): Promise<void> {
    await this.flightSearch.searchLocation().subscribe({
      next: (res: any) => {
        this.locations = res
      },
      error: (e: any) => {
        console.log(e)
      }
    })
  }
  
  get arr(): FormArray {
    return this.searchForm.get('arr') as FormArray;
  }
  
  createItem() {
    return this.formBuilder.group({
      formFormControl: new FormControl('', Validators.required),
      toFormControl: new FormControl('', Validators.required),
      departure: new FormControl('', Validators.required),
    })
  }
  
  getFromLoation(i:any){
    this.fromCityOptions =  this._filter(((this.searchForm.get('arr') as FormArray).at(i) as FormGroup).get('formFormControl')?.value, this.locations)     
  }
  
  getToLoation(i:any){
    this.toCityOptions =  this._filter(((this.searchForm.get('arr') as FormArray).at(i) as FormGroup).get('toFormControl')?.value, this.locations)     
  }
  
  private _filter(value: string, locations: any): string[] {
    const filterValue = value.toLowerCase();
    let data = locations.locations.filter((citys: any) => {
      return citys.name.toLowerCase().includes(filterValue) || citys.city.name.toLowerCase().includes(filterValue)
    }).map((option: any) => {
      return { name: option.name, id: option.id }
    })
    return data;
  }
  
  swapLocation() {
    this._snackBar.open('Your Location Is Swap', 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
    this.store = this.searchForm.controls['formFormControl'].value
    this.searchForm.controls['formFormControl'].setValue(this.searchForm.controls['toFormControl'].value)
    this.searchForm.controls['toFormControl'].setValue(this.store)
  }
  
  travel: any;
  
  travellerDialog() {
    const dialogRef = this.dialog.open(TravellerComponent, {
      panelClass: 'taveller-pop',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // console.log(result)
        let newValue: string = result.value1 + ' Adults, ' + result.value2 + ' Children, ' + result.value3 + ' Infants'
        this.searchForm.controls['travellersFormControl'].setValue(newValue)
        
        this.travel = newValue
        console.log(this.travel);
      }
    });
  }
  radioChange(event: MatRadioChange) {
    this.searchForm = new FormGroup({
      arr: this.formBuilder.array([this.createItem()]),
      travellersFormControl: new FormControl('', Validators.required),
      classFormControl: new FormControl('economy', Validators.required),
      departureFromDate: new FormControl(''),
      departureToDate: new FormControl(''),
    })
    
    if (event.value === 'Round-trip') {
      this.searchForm.get('departureFromDate')?.addValidators(Validators.required)
      this.searchForm.get('departureToDate')?.addValidators(Validators.required)
      this.searchForm.get('departure')?.clearValidators()
    }
    else if (event.value === 'One-way') {
      this.searchForm.get('departureFromDate')?.clearValidators()
      this.searchForm.get('departureToDate')?.clearValidators()
      this.searchForm.get('departure')?.addValidators(Validators.required)
    }
    else {
      this.addCity()
      this.searchForm.get('departureFromDate')?.clearValidators()
      this.searchForm.get('departureToDate')?.clearValidators()
      this.searchForm.get('departure')?.clearValidators()
      this.searchForm.get('travellersFormControl')?.clearValidators()
    }
  }
  
  searchFlights() {    
    let request:any = []    
    if(this.searchForm.value.arr.length > 1 && this.searchForm.valid){    
      for (let index = 0; index < this.searchForm.value.arr.length; index++) {
        let flyFromLocation = this.searchForm.value.arr[index].formFormControl.toLowerCase()
        let flyToLocation = this.searchForm.value.arr[index].toFormControl.toLowerCase()
        
        let flyFrom = this.locations.locations.filter((citys: any) => {
          return citys.name.toLowerCase().includes(flyFromLocation) || citys.city.name.toLowerCase().includes(flyFromLocation)
        }).map((option: any) => {
          return option.id
        })
        let flyTo = this.locations.locations.filter((citys: any) => {
          return citys.name.toLowerCase().includes(flyToLocation) || citys.city.name.toLowerCase().includes(flyToLocation)
        }).map((option: any) => {
          return option.id
        })
        
        let departureFromData = this.date.transform(this.searchForm.value.arr[index].departure, 'dd/MM/yyyy')       
        
        request.push(  {
          "to":  flyTo[0],
          "flyFrom": flyFrom[0],
          "dateFrom": departureFromData,
          "dateTo": departureFromData       
        })
      }
      this.flightSearch.searchMultiFlight(request).subscribe({
        next:(res:any)=>{
          console.log(res)
          localStorage.setItem('userrequest', JSON.stringify(request))
          localStorage.setItem('locations', JSON.stringify(this.locations))
          localStorage.setItem('multiflight', JSON.stringify(res))
          this.router.navigate(['/flight-list'])
        },
        error:(e)=>{
          console.log(e)
        }
      })
    } 
  }
  
  addCity(){
    this.arr.push(this.createItem());      
  }
  deleteLesson(index: number) {
    this.arr.removeAt(index);
  }
  
  clearFromLoation(){
    this.fromCityOptions =  []     
  }
  clearToLoation(){
    this.toCityOptions =  []     
  }
  
  
}
