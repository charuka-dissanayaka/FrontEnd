import { Http } from '@angular/http';
import { RegisterService } from './../services/register.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
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
  
//   id: any
//   constructor(public registerService: RegisterService, private htpp: Http) { }

//   userDetails;
//   userId='';
//   name="charuka"
//   reg={
//     firstName:'',
//     lastName : '',
//     email:'',
//     password:'',
//     confirmPassword:''

//   }
//   issuccess:boolean=false
//   message="Success";


    // this.registerService.userDetails().subscribe(
    //   res => { 
    //     this.userDetails = res['user'];
    //     this.userId=this.userDetails._id;
    //     this.registerService.setid(this.userDetails._id);
    //     console.log(this.name)
    //     // console.log(this.userId);
    //     // console.log(this.userDetails)
    //     this.reg.firstName=this.userDetails.firstName;
    //     this.reg.lastName=this.userDetails.lastName;
       
    //   },
    
    
    
    



  //   this.id = localStorage.getItem('uid'),
  //   this.htpp.get(`http://localhost:3000/user/${this.id}`).subscribe(ress => {
  //     console.log(ress.json())
  //   })
  // }

  /*onClickUpdate(eventid: number,event) {
    if (confirm("Are you sure to update this event?")) {
      this.editUser(this.id);
      alert("Successfully Updated")
    }
  }*/

//   updateEvent() {
//     this.registerService.editUser(this.id)
//       .subscribe(
//         data => {
//        });

//    }

// }
// // 