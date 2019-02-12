import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { jwtDecode } from 'jwt-decode';
import { elementDef } from '@angular/core/src/view';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isManager: boolean = false;
  isLogged: boolean = false;

  constructor(
    private authservice: AuthService,
    private router: Router
  ) {  
    
  }

  helper = new JwtHelperService();

  username = null;

  ngOnInit() {
    let token = localStorage.getItem('token');
    if(token === null){
      return;
    }
    this.username = this.helper.decodeToken(token).email;
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('uid');
    this.router.navigate(['\login']);
  }

  checkIsLogged(){
    var token = localStorage.getItem('token');
    if(token){
      return true
    } else{
      return false
    }
  }

  checkToken(){
    var token = localStorage.getItem('token');
    var decoded = jwtDecode(token);
    if(decoded.user.role == 'manager'){
      this.isManager = true
    } else {
      this.isManager = false
    }
  }

  
}
