import { Http } from '@angular/http';
import { RegisterService } from './../services/register.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-manager-edit-profile',
  templateUrl: './manager-edit-profile.component.html',
  styleUrls: ['./manager-edit-profile.component.css']
})
export class ManagerEditProfileComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      rawid: ['', Validators.required],
    //  role: ['', Validators.required],
    //  telephonNo: ['', Validators.required,Validators.number]]
    });
   
    }
    get f() { 
      return this.registerForm.controls; 
    }
    onSubmit() {
      this.submitted = true;
  
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }
  
      alert('SUCCESS!! :-)')
  }
  }
  
