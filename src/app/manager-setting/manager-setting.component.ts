import { Http } from '@angular/http';
import { RegisterService } from './../services/register.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-manager-setting',
  templateUrl: './manager-setting.component.html',
  styleUrls: ['./manager-setting.component.css']
})
export class ManagerSettingComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {

    this.registerForm = this.formBuilder.group({ 
    password: ['', Validators.required],
  })

}

}