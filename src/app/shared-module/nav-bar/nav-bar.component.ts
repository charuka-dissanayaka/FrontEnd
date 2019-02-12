import { EditProfileComponent } from './../../edit-profile/edit-profile.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditProfileComponent, {
      height:'720px',
      width: '800px',
      // data: event
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });

  }



}
