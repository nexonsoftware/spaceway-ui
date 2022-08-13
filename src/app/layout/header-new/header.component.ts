import { Component, OnInit ,HostListener} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar ,MatSnackBarHorizontalPosition,MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 1;
  userName : any ;
  userShow: boolean = false;
  black="rgba(0, 0, 0, 0.12)";
  isSticky: boolean = false;
  topSticky: boolean = false;
  pSp = window.pageYOffset;
  cSp=window.pageYOffset;

  constructor(public dialog: MatDialog,private activatedRoute: ActivatedRoute,private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
   this.cSp = window.pageYOffset;
    console.log(this.cSp)

   if(this.cSp > 50){
      this.isSticky = this.cSp < this.pSp;
    }else{
     this.isSticky = false
    }
    this.pSp = this.cSp; 
  }
  
  loginDialog() {
    console.log('login here');
    const dialogRef = this.dialog.open(LoginComponent, {
      panelClass: ['pop-up','md-pop','login-pop']
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        let loginValue:string='Hi ' +result.value1
        this.userName = loginValue 
        this.userShow = true
        console.log(this.userName); 
        this._snackBar.open('Login Succesfull', 'Ok', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000,
        });    
      }
      else{
        this.userShow = false
        this._snackBar.open('Login Failed', 'Ok', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000,
        });
      }

    });
    
  }
  logOut() {
    this.userName = false
    this._snackBar.open('Logout Succesfull', 'Ok', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }
}
