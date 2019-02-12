import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarManagerComponent } from './nav-bar-manager/nav-bar-manager.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavBarComponent, NavBarManagerComponent],
  exports:[NavBarComponent,NavBarManagerComponent]
})
export class SharedModuleModule { }
