import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-traveller-details',
  templateUrl: './traveller-details.component.html',
  styleUrls: ['./traveller-details.component.scss']
})
export class TravellerDetailsComponent implements OnInit {
  checked = true;
  options : any = FormGroup
  constructor(private _formbuilder: FormBuilder) {

      this.options = this._formbuilder.group({

        adult_first_name: ['',Validators.required],
        adult_last_name: ['',Validators.required],
        adult_gender: ['',Validators.required],
        adult_dob: ['',Validators.required],
        child_first_name: ['',Validators.required],
        child_last_name: ['',Validators.required],
        child_gender: ['',Validators.required],
        child_dob: ['',Validators.required],
        infant_first_name: ['',Validators.required],
        infant_last_name: ['',Validators.required],
        infant_gender: ['',Validators.required],
        infant_dob: ['',Validators.required],
        cust_counrty_code: ['',Validators.required],
        cust_phone: ['',[Validators.required,
          Validators.pattern("^[0-9]*$"),
          Validators.minLength(10), Validators.maxLength(10)]],
        cust_email: ['',[Validators.required,Validators.email]],
        cust_dob: ['',Validators.required],
        cust_card_no: ['',Validators.required]
      })
   }

  ngOnInit(): void {
  }

}
