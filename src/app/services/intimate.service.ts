import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class IntimateService {
  authToken: any;
  user: any;

  constructor(private http:Http) { }

  AddMatrix(matrix){
    console.log("route")
    console.log(matrix);
    return this.http.post("http://localhost:3000/intimate/saveMatrix/", matrix);
  }

}
