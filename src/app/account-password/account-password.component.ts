import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-account-password',
  templateUrl: './account-password.component.html',
  styleUrls: ['../../scss/account.scss']
})
export class AccountPasswordComponent implements OnInit {
  hide = true;
  hideNew = true;
  hideC = true;
  constructor(private _location: Location) { }

  ngOnInit(): void {
  }
  backClicked() {
    this._location.back();
  }
}
