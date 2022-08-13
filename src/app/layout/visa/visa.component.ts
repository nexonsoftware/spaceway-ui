import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-visa',
  templateUrl: './visa.component.html',
  styleUrls: ['../../../scss/search.scss']
})
export class VisaComponent implements OnInit {
  public variables = ['I am looking for a visa to','Macedonia','UAE'];
  public variables2 = ['select Visa Type','30 days visa','90 days visa','Multiple Entry-30 Days,Multiple Entry-90 Dyas'];
  public variables3 = ['select nationality','Indian','Bangladeshi'];

  public filteredList1 = this.variables.slice();
  public filteredList2 = this.variables2.slice();
  public filteredList3 = this.variables3.slice();

  _visaForm:any = FormGroup

  constructor(private _form_builder: FormBuilder,private route: ActivatedRoute,private router: Router) { 

    this._visaForm = this._form_builder.group({

      visa_destination: ['',Validators.required],
      visa_type: ['',Validators.required],
      nationality: ['',Validators.required],
    })
   }

  ngOnInit(): void {

      
  }

  visaSubmit(){

      const visa_destination = this._visaForm.get('visa_destination').value
      const visa_type = this._visaForm.get('visa_type').value
      const nationality = this._visaForm.get('nationality').value
      

      localStorage.setItem('visa_destination',visa_destination)
      localStorage.setItem('visa_type',visa_type)
      localStorage.setItem('nationality',nationality)

      this.router.navigate(['/visa-details'])
  }

  

}
