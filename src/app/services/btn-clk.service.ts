//import { BtnClkService } from './btn-clk.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
@Injectable({
  providedIn: 'root'
})
export class BtnClkService {
  uri='http://localhost:4200/';


  constructor(private Http:HttpClient) { }
  getBtnClk(){
    return this.Http.get(`${this.uri}/btnClk`);
  }
  getBtnClkById(id){
    return this.Http.get(`${this.uri}/btnClk/${id}`);
  }
  updateBtnClk(id,Title,Responsible,description,serverity,status){
    const BtnClk={
      Title:Title,
      reponsible:Responsible,
      description:description,
      serverity:serverity
    };
    return this.Http.post(`${this.uri}/btnClk/update/${id}`,BtnClk);
  }
  deleteBtnClk(id){
    return this.Http.get(`${this.uri}/btnClk/delete/${id}`);
  }
  }

