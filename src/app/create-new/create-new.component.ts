import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {
  multiArray = [];
  type;
  id;
  image;
  months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  constructor(private http: Http,private router:Router) { }

  ngOnInit() {
    this.id = localStorage.getItem('uid');
    this.http.get(`http://localhost:3000/user/${this.id}`).subscribe(res => {
      console.log();
      const data = res.json()
      this.image = data.imageUrl;
    })
     this.image = '../../assets/brand2.png';
  }

  point_it(event) {
    const current_month = new Date().getUTCMonth();
    const month = this.months[current_month];

    const pos_x = event.offsetX;
    const pos_y = event.offsetY;
    console.log(pos_x);
    console.log(pos_y);
    const x = pos_x;
    const y = pos_y;
   if (x>=10 && x <= 500 && 6 <= y && y <= 300) {
      if (this.type === 'blue') {
        const index_blue = this.multiArray.findIndex(res => {
          return res.x ===85 && res.y === 60 && res.type === 'blue';
        });

        if (index_blue > -1) {
          const abc = this.multiArray[index_blue].count + 1;
          this.multiArray[index_blue].count = abc;
          this.forLoopForCoodinates(this.multiArray);
        } else {
          this.multiArray.push({ x: pos_x, y: pos_y, count: 1, type: 'blue', month: month });
          this.forLoopForCoodinates(this.multiArray);
        }
      } else if (this.type === 'green') {
        const index_greem = this.multiArray.findIndex(res => {
          return res.x === 200&& res.y === 100 && res.type === 'green';
        });

        if (index_greem > -1) {
          const abc = this.multiArray[index_greem].count + 1;
          this.multiArray[index_greem].count = abc;
          this.forLoopForCoodinates(this.multiArray);
        } else {
          this.multiArray.push({ x: pos_x, y:pos_y, count: 1, type: 'green', month: month });
          this.forLoopForCoodinates(this.multiArray);
        }
      } else if (this.type === 'red') {
        const index_red = this.multiArray.findIndex(res => {
          return res.x === 41 && res.y === 38 && res.type === 'red';
        });

        if (index_red > -1) {
          const abc = this.multiArray[index_red].count + 1;
          this.multiArray[index_red].count = abc;
          this.forLoopForCoodinates(this.multiArray);
        } else {
          this.multiArray.push({ x: pos_x, y: pos_y, count: 1, type: 'red', month: month });
          this.forLoopForCoodinates(this.multiArray);
        }
      } else {
        alert('You have to pick one');
      }
    }

  }

  forLoopForCoodinates(array) {
    $('#pointer_div').empty();
    for (const arr of this.multiArray) {
      const map_ = document.getElementById('pointer_div');
      if (arr.type === 'blue') {
        const point_blue = $('<div id="map-point-blue"></div>');

        point_blue.css({
          left: arr.x + 'px',
          top: arr.y + 148+'px',
        });
        point_blue.text(arr.count);
        point_blue.appendTo(map_);

      } else if (arr.type === 'green') {
        const point_green = $('<div id="map-point-green"></div>');

        point_green.css({
          left: arr.x  + 'px',
          top: arr.y+148  + 'px',
        });
        point_green.text(arr.count);
        point_green.appendTo(map_);
      } else if (arr.type === 'red') {
        const point_red = $('<div id="map-point-red"></div>');

        point_red.css({
          left: arr.x  + 'px',
          top: arr.y+148  + 'px',
        });
        point_red.text(arr.count);
        point_red.appendTo(map_);
      }
    }
  }

  saveCoorfinates() {
    const current_date = new Date().getTime();
    const data = {
      coordinates: this.multiArray,
      qualityCheckerID: this.id,
      imageUrl: this.image,
      createdDate: current_date,
    };
    console.log(data);
    this.http.post('http://localhost:3000/coodinates/', data).subscribe(res => {
      console.log(res);
      this.router.navigate(['/intimate']);
    });
  }

  colorClick(event) {
    this.type = event.target.value;
  }

}

