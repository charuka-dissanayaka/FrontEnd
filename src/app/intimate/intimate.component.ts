
import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Http } from '@angular/http';
import { IntimateService } from '../services/intimate.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-intimate',
  templateUrl: `./intimate.component.html`,

  styleUrls: ['./intimate.component.css'],
  providers: [IntimateService]
})
export class IntimateComponent implements OnInit {

  matrix = new Array(10);
  count = 0;
  data = {
    matrix: null
  }

  constructor(
    private http: Http,
    private Intimates: IntimateService,
    private router: Router,
    // public dialog: MatDialog
  ) {
    this.count = 0;
    for (var i = 0; i < 10; i++) {
      this.matrix[i] = new Array(10);
    }
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        this.matrix[i][j] = false;
      }
    }

  }

  addOnClick1(event) {
    const pos_x = event.offsetX;
    const pos_y = event.offsetY;
    var map = document.getElementById('card-img-top2');
    var point = $('<div id="map-point">3</div>');
    console.log(map)
    console.log(pos_x)
    console.log(point)

    console.log(point)

    setTimeout(() => {
      point.style.top = pos_y;
      point.style.left = pos_x;
      point.appendTo(map)
      point.text('1')
    }, 2000);

  }

  addOnClick(Event) {
    console.log("add on click")
    console.log(Math.floor((Event.x) / 32));
    console.log(Math.floor((Event.y) / 39));
    var x = Math.floor((Event.x) / 32);
    var y = Math.floor((Event.y) / 39);
    if (x >= 10)
      x = 9;
    if (y >= 10)
      y = 9;
    this.count++;
    this.matrix[x][y] = true;
    // console.log(this.matrix);
    this.Intimates.AddMatrix(this.matrix)
      .subscribe(responce => {
        console.log(responce);
      })
  }

  submit() {
    this.data.matrix = JSON.stringify(this.matrix);
    console.log(this.matrix);
    this.http.post('http://localhost:3000/intimate/', this.matrix);
    // console.log(this.data);
  }

  ngOnInit() {


  }


  
  public onClickEvent() {
    this.router.navigate(['\front']);

  }
  public onClickEvent1() {
    localStorage.setItem('token', null);
    this.router.navigate(['\home']);


  }

  
}
