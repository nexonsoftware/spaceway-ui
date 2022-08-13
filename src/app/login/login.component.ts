import { Component, OnInit } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  login = true;
  forget=false;
  register=false;
  selected='';
  errorControl = new FormControl('', Validators.required);
  passwordFormControl = new FormControl('', Validators.required);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor(private dialogRef: MatDialogRef<LoginComponent>,private authservice: AuthService) { }

  ngOnInit(): void {
  }
  loginSubmit(){
    let join:any = {value1:this.emailFormControl.value,value2:this.passwordFormControl.value}
    if(this.passwordFormControl.value==''){
    }else{
      this.dialogRef.close(join);
    }
  }

  facebookLogin(){

    this.authservice.FacebookAuth()
  }

  loginWithGoogle(){

    const res = this.authservice.GoogleAuth()
    console.log(res)
  }

}
