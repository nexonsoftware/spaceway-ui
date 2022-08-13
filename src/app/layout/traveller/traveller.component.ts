import { Component, OnInit,Input  } from '@angular/core';
import { FormControl, Validators} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-traveller',
  templateUrl: './traveller.component.html',
  styleUrls: ['./traveller.component.scss']
})
export class TravellerComponent implements OnInit {
  foods: Food[] = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'},
    {value: '7', viewValue: '7'},
    {value: '8', viewValue: '8'},
    {value: '9', viewValue: '9'},
  ];
  adultsFormControl =new FormControl('');
  childrenFormControl =new FormControl('');
  infantsFormControl =new FormControl('');
  constructor(private dialogRef: MatDialogRef<TravellerComponent>) { }

  ngOnInit(): void {
  }
  travellers(){
    let join:any = {value1:this.adultsFormControl.value,value2:this.childrenFormControl.value,value3:this.infantsFormControl.value}
    this.dialogRef.close(join);
  } 
}
