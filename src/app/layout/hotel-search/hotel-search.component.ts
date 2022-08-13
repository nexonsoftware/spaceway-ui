import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MailService } from 'src/app/services/mail.service';
import { TravellerComponent } from '../traveller/traveller.component';

@Component({
  selector: 'app-hotel-search',
  templateUrl: './hotel-search.component.html',
  styleUrls: ['../../../scss/search.scss']
})
export class HotelSearchComponent implements OnInit {
  travellersFormControl =new FormControl('', Validators.required);
  _hotelSearchForm:any = FormGroup
  constructor(public dialog: MatDialog,private _form_builder: FormBuilder,private service: MailService) {

      this._hotelSearchForm = this._form_builder.group({

        _hotel_destination_city: ['',Validators.required],
        hotel_booking_startdate: ['',Validators.required],
        hotel_booking_enddate: ['',Validators.required],
        _hotel_travellers: ['',Validators.required],
        hotel_booking_nationality: ['',Validators.required],
        hotel_booking_resisdential_country: ['',Validators.required],
        hotel_booking_name: ['',Validators.required],
        hotel_booking_email: ['',[Validators.required,Validators.email]],
        hotel_booking_phone: ['',Validators.required],
      })
   }

  ngOnInit(): void {
  }

  travel : any ;
  travellerDialog() {
    const dialogRef = this.dialog.open(TravellerComponent, {
      panelClass: 'taveller-pop',
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // console.log(result)
        let newValue:string=result.value1+' Adults, '+result.value2+' Children, '+result.value3+' Infants'
        this.travellersFormControl.setValue(newValue)
        this.travel = newValue 
        console.log(this.travel);
        this._hotelSearchForm.patchValue({

          _hotel_travellers: this.travel
        }) 
      }    
    });
  }

hotelSearchSubmit(){

    console.log(this._hotelSearchForm.value)

    const name = this._hotelSearchForm.get('hotel_booking_name').value
    const email = this._hotelSearchForm.get('hotel_booking_email').value
    const phone = this._hotelSearchForm.get('hotel_booking_phone').value
    const city = this._hotelSearchForm.get('_hotel_destination_city').value
    const start_date = this._hotelSearchForm.get('hotel_booking_startdate').value
    const end_date = this._hotelSearchForm.get('hotel_booking_enddate').value
    const nationality = this._hotelSearchForm.get('hotel_booking_nationality').value
    const resisdential_country = this._hotelSearchForm.get('hotel_booking_resisdential_country').value
    const _hotel_travellers = this._hotelSearchForm.get('_hotel_travellers').value

    this.service.hotelSearchMailInfo(name,email,phone,city,start_date,end_date,nationality,resisdential_country,_hotel_travellers).subscribe(
      (res: any)=>{

          console.log(res)
      }
    )
}

}
