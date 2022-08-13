import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatRadioChange } from '@angular/material/radio';
import { ActivatedRoute } from '@angular/router';
import { VisaTravellerComponent } from '../visa-traveller/visa-traveller.component';

@Component({
  selector: 'app-visa-deatails',
  templateUrl: './visa-deatails.component.html',
  styleUrls: ['../../../scss/search.scss']
})
export class VisaDeatailsComponent implements OnInit {

  public variables = ['I am looking for a visa to','Macedonia','UAE'];
  public variables2 = ['select Visa Type','30 days visa','90 days visa','Multiple Entry-30 Days,Multiple Entry-90 Dyas'];
  public variables3 = ['select nationality','Indian','Bangladeshi'];
  public variables4 = ['select title','Mr','Mrs','Miss','Dr','Mstr'];

  public filteredList1 = this.variables.slice();
  public filteredList2 = this.variables2.slice();
  public filteredList3 = this.variables3.slice();
  public filteredList4 = this.variables4.slice();
  public filteredList5 = this.variables4.slice();
  public filteredList6 = this.variables3.slice();
  public filteredList7 = this.variables3.slice();
  


  _visaForm:any = FormGroup
  _noofAdults: any = 1
  _noOfChildrens: any =0
  _total_travellers: any
  seletedVisaType:any
  
  constructor(private _form_builder: FormBuilder,private route: ActivatedRoute,public dialog: MatDialog,) { 

    this._visaForm = this._form_builder.group({
      arr: this._form_builder.array([this.createItem()]),
      arr2: this._form_builder.array([this.createItemChildren()]),
      visa_destination: ['',Validators.required],
      visaFormControl: ['',Validators.required],
      visa_type: ['',Validators.required],
      nationality: ['',Validators.required],
      gurarantor_name: ['',Validators.required],
      gurarantor_email: ['',[Validators.required,Validators.email]],
      gurarantor_phone: ['',Validators.required],
    })

    let newValue: string = 1 + ' Adults, ' + 0 + ' Children '
    this._visaForm.controls['visaFormControl'].setValue(newValue)
   }

  ngOnInit(): void {

      let visa_destination = localStorage.getItem('visa_destination')
      let visa_type = localStorage.getItem('visa_type')
      let nationality = localStorage.getItem('nationality')
      console.log(visa_type)
      console.log(visa_destination)

      this._visaForm.patchValue(
         {
          visa_destination: visa_destination,
         } 
      )

      this._visaForm.patchValue(
        {
          visa_type: visa_type,
        } 
     )
     this._visaForm.patchValue(
      {
        nationality: nationality,
      } 
   )

   this.seletedVisaType = visa_type   

   this._total_travellers = parseInt(this._noofAdults) + parseInt(this._noOfChildrens)
      
  }

  get arr(): FormArray {
    return this._visaForm.get('arr') as FormArray;
  }

  get arr2(): FormArray {
    return this._visaForm.get('arr2') as FormArray;
  }

  createItem(){

      return this._form_builder.group({

        adult_title: ['',Validators.required],
        adult_first_name: ['',Validators.required],
        adult_last_name: ['',Validators.required],
        adult_nationality: ['',Validators.required]
        
       }) 
   
  }

  createItemChildren(){

      return this._form_builder.group({

        child_title: ['',Validators.required],
        child_first_name: ['',Validators.required],
        child_last_name: ['',Validators.required],
        child_nationality: ['',Validators.required],
        child_dob: ['',Validators.required]
      })
      
  }

  addFields(){

      this.arr.push(this.createItem())
  }

  visaSubmit(){

      const visa_destination = this._visaForm.get('visa_destination').value
      const visa_type = this._visaForm.get('visa_type').value
      const nationality = this._visaForm.get('nationality').value

      console.log(this._visaForm.value)  
  }
  visa :any
  visatravellerDialog() {
    const dialogRef = this.dialog.open(VisaTravellerComponent, {
      panelClass: 'visa-pop',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result)
        let newValue: string = result.value1 + ' Adults, ' + result.value2 + ' Children '
        this._visaForm.controls['visaFormControl'].setValue(newValue)
        
        this.visa = newValue

        this._noofAdults = result.value1
        this._noOfChildrens = result.value2
        this.arr.clear()
        this.arr2.clear()
        if(this._noofAdults > 1){

            for(var i=1; i<= this._noofAdults; i++){

                this.arr.push(this.createItem())
            }
        }

        if(this._noOfChildrens >= 1){

          for(var i=1; i<=this._noOfChildrens; i++){

            this.arr2.push(this.createItemChildren())
          }

        }
         
        this._total_travellers = parseInt(this._noofAdults) + parseInt(this._noOfChildrens)
        
      }
    });
  }
  

}
