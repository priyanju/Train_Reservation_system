import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login!:FormGroup;
  user_name = new FormControl(''); 
  password = new FormControl(''); 
  id: any;

  constructor(private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {

    
  }


  submit(){
    if(this.user_name.value === "Passenger@gmail.com" && this.password.value === "Passenger"){
      this.id = 1;
      localStorage.setItem("id",this.id)
      this.router.navigateByUrl('/home')

    }
    else{
       Swal.fire("Please check your credentials")
    }
  }
}