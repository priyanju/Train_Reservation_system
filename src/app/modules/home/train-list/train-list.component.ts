import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { AddPassengersComponent } from '../add-passengers/add-passengers.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.css']
})
export class TrainListComponent implements OnInit {
  @Input() dataSource:any;
  @Input() fromStation:any;
  @Input() toStation:any;

  dataSubject: any;
  constructor(public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
  }
  bookNow(selectedClass:any, datasource:any){
    let data = {selectedClass : selectedClass, datasource : datasource};
    const dialogRef = this.dialog.open(AddPassengersComponent, {
      data: data,
      disableClose: true
    });
  }


}
