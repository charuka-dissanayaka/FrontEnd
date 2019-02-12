import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TutorCardListService{

   constructor(private http: Http){
   }

   getTutorList(){
    //when api created send "name" parameter with get request
    return this.http.get('http://localhost:3000/search');
   }
   
}

/* https://jsonplaceholder.typicode.com/users */