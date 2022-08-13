import { Injectable } from '@angular/core';
import { FacebookAuthProvider } from 'firebase/auth';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userArray: any =[]
  constructor( public afAuth: AngularFireAuth) { }

  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  FacebookAuth() {
    return this.AuthFaceLogin(new FacebookAuthProvider());
  }

  AuthFaceLogin(provider:any){

    return this.afAuth
    .signInWithPopup(provider)
    .then((result) => {
      console.log('You have been successfully logged in!');
      this.userArray = result['user']
        console.log(this.userArray['multiFactor']['user'])
        localStorage.setItem('access_token',this.userArray['multiFactor']['user']['accessToken'])
        localStorage.setItem('username',this.userArray['multiFactor']['user']['displayName'])
        localStorage.setItem('photoURL',this.userArray['multiFactor']['user']['photoURL'])
        localStorage.setItem('email',this.userArray['_delegate']['providerData'][0]['email'])
        location.reload()
    })
    .catch((error) => {
      console.log(error);
    });
  }

  AuthLogin(provider: any) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
        console.log(result['user'])
        this.userArray = result['user']
        console.log(this.userArray['multiFactor']['user'])
        localStorage.setItem('access_token',this.userArray['multiFactor']['user']['accessToken'])
        localStorage.setItem('username',this.userArray['multiFactor']['user']['displayName'])
        localStorage.setItem('photoURL',this.userArray['multiFactor']['user']['photoURL'])
        localStorage.setItem('email',this.userArray['multiFactor']['user']['email'])

        location.reload()
        
      })
      .catch((error) => {
        //console.log(error);
        
      });
  }
}
