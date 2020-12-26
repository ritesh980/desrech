import { Component, OnInit,NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators ,ReactiveFormsModule} from "@angular/forms";
import { Router } from '@angular/router';
import { UserService} from '../../servic/user.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  userForm:any=FormGroup

  constructor(public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private UserService: UserService) {

      this.userForm = this.formBuilder.group({
        username: ['',Validators.required],
        fname: [''],
        lname: [''],
        email:[''],
        address:[''],
        phone:[''],
        city:[''],
        password:['']
      }) 
     }

  ngOnInit(): void {
  }
  onSubmit(): any {
    this.UserService.AddUser(this.userForm.value)
    .subscribe(() => {
        console.log('New rgistration is successfull!')
        // this.ngZone.run(() => this.router.navigateByUrl('/singin'))
      }, (err: any) => {
        console.log(err);
    });
  }
}
