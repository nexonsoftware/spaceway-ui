import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['../../scss/account.scss']
})
export class AccountProfileComponent implements OnInit {
  backClicked() {
    this._location.back();
  }
  constructor(private _location: Location) { }

  ngOnInit(): void {
  }
  selected='';
  errorControl = new FormControl('', Validators.required);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  urls = new Array<string>();
  name: string ='Upload Profile Photo ';
  imc: any ;
  detectFiles(event:any) {
    
    let files = event.target.files;
    if (files && files.length) {
      this.urls = [];
      this.name = '';
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
        if (this.name!=''){
          this.name = this.name + ', '
        }
        this.name = this.name + file.name
      }
    }
  }

  clearImg(){
    this.urls = [];
    this.name ='Upload Profile Photo ';
    this.imc = ''
  }

}
