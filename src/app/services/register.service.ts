import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RegisterService {
  authToken: any;
  user: any;

  constructor(private http:Http) { }

  registerUser(user){
    console.log(user)
    return this.http.post("http://localhost:3000/user/register", user);
  }

  editUser(id){
    console.log(id)
    return this.http.get("http://localhost:3000/user/"+id);
  }

}
