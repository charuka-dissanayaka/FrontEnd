import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qclist',
  templateUrl: './qclist.component.html',
  styleUrls: ['./qclist.component.css']
})
export class QclistComponent implements OnInit {
  qualityChecker;
  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/user/').subscribe(res => {
      console.log(res.json())
      this.qualityChecker = res.json();
    })
  }

  clickQC(qc) {
    this.router.navigate([`./chart/${qc._id}`])
  }

}
