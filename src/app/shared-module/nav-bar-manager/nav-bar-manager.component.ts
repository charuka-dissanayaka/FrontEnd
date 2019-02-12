import { ManagerEditProfileComponent } from './../../manager-edit-profile/manager-edit-profile.component';

import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-nav-bar-manager',
  templateUrl: './nav-bar-manager.component.html',
  styleUrls: ['./nav-bar-manager.component.css']
})
export class NavBarManagerComponent implements OnInit {

  constructor(
    public dialog:MatDialog,
  ) { }

  ngOnInit() {
  }
  openDialog() {
    const dialogRef = this.dialog.open(ManagerEditProfileComponent,{
       width: '800px', 
       height:'500px',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
   
    });

}


}
