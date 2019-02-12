import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import { Router } from '@angular/router';
import { PasswordValidation } from './password.validator';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form;
  has = false;
  regErr = false;


  ngOnInit() {
  }

  constructor(
    private router: Router,
    private registerService: RegisterService,
    fb: FormBuilder) {
    this.form = fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]],
      confirmPassword: ['', [
        Validators.required,
      ]],
      role: ['', Validators.required],
      rowId: ['', Validators.required]
    });
  }

  get firstname() { return this.form.get('firstname'); }
  get lastname() { return this.form.get('lastname'); }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
  get role() { return this.form.get('role'); }
  get rowId() { return this.form.get('rowId'); }
  get confirmPassword() { return this.form.get('confirmPassword'); }

  onSubmit(regForm) {

    let user = regForm.value;
    console.log(regForm.value);
    this.userRegister(user);
    // this.form.reset();
  }

  userRegister(user) {
    console.log(user)
    this.registerService.registerUser(user).subscribe(response => {
      console.log(response);
      if (response.json().has) {
        this.has = true;
      } else {
        if (response.json().success) {
          alert("user registerd successfully");
          this.router.navigate(['login']);
        } else {
          this.regErr = true;
          // this.form.reset();
        }
      }
    });
  }


 
textBoxDisabled = true;

toggle1(){
  console.log("toggle function");
  this.textBoxDisabled =false ;
}
toggle2(){
  console.log("toggle function");
  this.textBoxDisabled = true;
}


}


