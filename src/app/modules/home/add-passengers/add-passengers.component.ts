import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormBuilder, FormGroup, FormArray } from '@angular/forms';
// import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-add-passengers',
  templateUrl: './add-passengers.component.html',
  styleUrls: ['./add-passengers.component.css']
})
export class AddPassengersComponent implements OnInit {
  adultForm: any = FormGroup;
  adult: any = FormArray;
  childrenForm: any = FormGroup;
  children: any = FormArray;
  totalAdults: any;
  constructor(public dialogRef: MatDialogRef<AddPassengersComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    // private dataService: DataService
    ) { }

  ngOnInit(): void {
    this.adultForm = this.fb.group({
      adult: this.fb.array([this.createAdult()])
    })
    this.childrenForm = new FormGroup({
      children: new FormArray([])
    });
  }
  onNoClick() {
    this.dialogRef.close();
  }
  createAdult() {
    return this.fb.group({
      name: [''],
      gender: [''],
      age: [''],
      berth: [''],
      nationality: [''],
    })
  }

  addAdult() {
    this.adult = this.adultForm.get('adult') as FormArray;
    this.adult.push(this.createAdult());
  }

  onSubmit() {
    console.log(this.adultForm.value);
  }


  createChildren(): FormGroup {
    return this.fb.group({
      name: '',
      gender: '',
      age: ''
    });
  }

  addChildren(): void {
    this.children = this.childrenForm.get('children') as FormArray;
    this.children.push(this.createChildren());
  }
  calculate() {
    const adult = (this.adultForm.get('adult') as FormArray).value;
    const children = (this.childrenForm.get('children') as FormArray).value;
    return (this.data.selectedClass.price * adult.length) + 100;
  }
  calculateAdult() {
    this.totalAdults = (this.adultForm.get('adult') as FormArray).value;
    return this.totalAdults.length;
  }
  calculateChildren() {
    const children = (this.childrenForm.get('children') as FormArray).value;
    return children.length;
  }
  confirmBooking() {
    this.data.datasource.seats.forEach((seat: any) => {
      if (seat.code === this.data.selectedClass.code) {
        seat.seats = seat.seats - this.totalAdults.length;
      }
    });
    console.log(this.data.datasource)
   this.dialogRef.close(this.data.datasource.seats)
    // this.dataService.updateData(data)
  }
}
