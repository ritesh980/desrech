import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from "@angular/forms";
import { Router } from '@angular/router';
import {RegistationService} from '../../services/registation.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
 
  registerForm: FormGroup;
  showSuccess: boolean = false;
  serverErrorMessage: any;
  
  
  

  constructor(private router: Router,
     public formBuilder: FormBuilder,
     private Registrationservice:RegistationService
    ) {

      this.registerForm = this.formBuilder.group({
        username: ['',Validators.required],
        fname: [''],
        lname: [''],
        email:[''],
        phone:[' '],
        address:[''],
        city:[''],
        password:['']
      })

     }

     onRegisterSubmit(registerForm: any){
console.log(this.registerForm.value)
this.Registrationservice.postUser(registerForm.value).subscribe(res=>{
  this.showSuccess=true
},err=>{
if(err){
  this.serverErrorMessage=err.error.join('<b>')
}
})



     }
  ngOnInit(): void {
    
  }
}
