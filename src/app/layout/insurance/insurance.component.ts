import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['../../../scss/search.scss']
})
export class InsuranceComponent implements OnInit {

  public variables = ['India','Bangladesh','Pakistan'];
  public variables2 = ['India','Bangladesh','Pakistan','UAE'];
  public variables3 = ['select nationality','Indian','Bangladeshi'];

  public filteredList1 = this.variables.slice();
  public filteredList2 = this.variables2.slice();
  public filteredList3 = this.variables3.slice();

  quantity: number=1;
  quantchild: number=1;
  i:any =1
  j:any = 1

  _insuranceSearchForm: any = FormGroup
  constructor(private form_builder: FormBuilder) { 

      this._insuranceSearchForm = this.form_builder.group({

        residence: ['',Validators.required],
        destination: ['',Validators.required],
        departure_date: ['',Validators.required],
        return_date: ['',Validators.required],
        no_of_child: ['',Validators.required],
        no_of_adult: ['',Validators.required],
      })
  }

  ngOnInit(): void {
  }

  set isDisabled(value: boolean) {
    
     this._insuranceSearchForm.controls['no_of_child'].disable();
     this._insuranceSearchForm.controls['no_of_adult'].disable();
    
   }

   
  plus(){
    if(this.i <5){
      this.quantity=this.i++;
      
    }
  }
  minus(){
    if(this.i >=1){
      this.i--;
      this.quantity=this.i;
    }
  }
  pluschild(){
    
    if(this.j <5){
      this.j++;
      this.quantchild=this.j;
    }
  }
  minuschild(){
    
    if(this.j >=1){
      this.j--;
      this.quantchild=this.j;
    }
  }

  insuranceSearchSubmit(){


  }

}
