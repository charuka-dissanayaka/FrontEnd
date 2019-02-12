import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intimate-list',
  templateUrl: './intimate-list.component.html',
  styleUrls: ['./intimate-list.component.css']
})
export class IntimateListComponent implements OnInit {

  tasks;
  alertmessages;
  constructor(
    private http: Http,
    private router: Router
  ) {

  }

  ngOnInit() {
    const qID = localStorage.getItem('uid'); 
    console.log(qID);
    // localStorage.getItem('uid');
    this.http.get(`http://localhost:3000/coodinates/${qID}`).toPromise().then(res => {
      const resl = res.json();
      console.log(resl);
      this.tasks = resl;
    });
    this.http.get(`http://localhost:3000/alerts/${qID}`).subscribe(alers => {
      const result = alers.json();
      this.alertmessages = result;
      console.log(this.alertmessages);
    });
  }

  objectClick(task) {
    console.log(task);
    this.router.navigate([`./intimate-view/${task._id}`]);
  }

  createNew() {
    this.router.navigate(['./create-new/']);
  }


  public onClick() {
    this.router.navigate(['\back']);
  }
  public onClickEvent() {
    this.router.navigate(['\front']);
  }

  deleteAlert(alert) {
   
    this.http.patch(`http://localhost:3000/alerts/${alert._id}`, 'completed').subscribe(res => {
      console.log(res)
        const index = this.alertmessages.findIndex(x => {
          return  x._id === alert._id
        })
        console.log(index)
        if(index > -1) {
          this.alertmessages.splice(index, 1)
          console.log(this.alertmessages)
        }
     
    })
  }

}
