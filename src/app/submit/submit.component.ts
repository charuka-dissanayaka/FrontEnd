import { Component, OnInit } from '@angular/core';
// import { router} from
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
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
