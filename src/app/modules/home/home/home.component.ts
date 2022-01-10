import { Component, Inject, OnInit } from '@angular/core';
import data from '../../../json/data.json';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  minDate = new Date();
  
  myForm: any = FormGroup;
  public trainList: { trainName: any, trainCode: any, departureTime: any, aarivalTime: any, travelDuration: any }[] = data;

  stations: any[] = [
    { name: 'Coimbatore Jn', code: 'CBE'  },
    { name: 'Chennai Egmore', code: 'MS' },
    { name: 'Chennai Central', code: 'MAS' }, 
    { name: 'Salem Jn', code: 'SA' },
    { name: 'Erode Jn', code: 'ED' },
    { name: 'Vellore Town', code: 'VT' }, 
  ]
  show:boolean = false;
  constructor(public fb: FormBuilder,public dialog: MatDialog,) {
  


  
 }

 


  ngOnInit(): void {
    this.initializeForm();

  }
  initializeForm() {
    this.myForm = this.fb.group({
      fromStation: [],
      toStation: [],
      travelDate: []
    })
  }

  submit(myForm: FormGroup) {
    this.show = true;
  }
 
}



