import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { jwt_decode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;
  logInvalid = false;
  selectedUser:string;
  decoded;
  logValid: boolean;
  jsn;



  constructor( private router: Router, private authService: AuthService,  fb: FormBuilder) {
    {
    this.form = fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      role: ['', Validators.required]
    })
  }
  }
//   model={
//  email:'',
//     password:''
//   };
//   emailRegex=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  ngOnInit() {
    //this.authService.logOut();
  }

  get email(){
    return this.form.get('email');
  }

  get password(){
    return this.form.get('password');
  }

  get role(){
    return this.form.get('role');
  }


  onSubmit(loginForm){
    let user = loginForm.value;
  //  console.log(user)
     this.authService.loginUser(user).subscribe(
      res=>{
        const data = res.json().data[0]._id;
        console.log(res)

        if(res.json().JWT_Token){
          console.log('loging')
          console.log(res.json().JWT_Token)
          var Token = res.json().JWT_Token;
          localStorage.setItem('token',Token)
          localStorage.setItem('uid', data);
          this.decoded = atob(Token.split('.')[1]);
          console.log(this.decoded);
          this.jsn =  JSON.parse(this.decoded);
          console.log("jsn obj "+this.jsn);
          if(this.jsn.user.role  == "qualityChecker"){
              this.router.navigate(['intimate']);
          }
          else{
             this.logInvalid = true;
            this.form.reset();  
            this.router.navigate(['graph']);
            }
            // this.logInvalid = true;
            // this.form.reset();
          console.log(res.json().state);
          // console.log(res)
          
          
        }

      },
      err=>{console.log('err')
        throw err;
      }
    )
    

  }

  userChange(event){
    this.selectedUser=event.target.value;
    

  }
  textBoxDisabled = true;

  // toggle1(){
  //   console.log("toggle function");
  //   this.textBoxDisabled =false ;
  // }
  // toggle2(){
  //   console.log("toggle function");
  //   this.textBoxDisabled = true;
  // }
}

