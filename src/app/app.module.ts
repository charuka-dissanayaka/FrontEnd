
import { SharedModuleModule } from './shared-module/shared-module.module';
import { from } from 'rxjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { appRoutes } from '../app/routers';
import { SlideshowComponent } from './slideshow/slideshow.component'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterService } from './services/register.service';
import { AuthService } from './services/auth.service';
import { FooterComponent } from './footer/footer.component';

import { TutorCardListService } from './services/tutor-card-list.service'; 
import { TutorAuthGuard } from './services/tutor-auth-guard.service';
import { AuthGaurd } from './services/auth-gaurd.service';

import { IntimateComponent } from './intimate/intimate.component';
import { GraphComponent } from './graph/graph.component';


import {MatDialogModule} from '@angular/material/dialog';
import { BrasComponent } from './graph/bras/bras.component';
import { LogoutComponent } from './logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { QclistComponent } from './qclist/qclist.component';
import { ChartComponent } from './chart/chart.component';

// Import angular-fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';

// Import FusionCharts library
import * as FusionCharts from 'fusioncharts';

// Load FusionCharts Individual Charts
import * as Charts from 'fusioncharts/fusioncharts.charts';
import { IntimateListComponent } from './intimate-list/intimate-list.component';
import { IntimateViewComponent } from './intimate-view/intimate-view.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { SubmitComponent } from './submit/submit.component';

import { ManagerEditProfileComponent } from './manager-edit-profile/manager-edit-profile.component';
// import { CreateNewComponent } from './create-new/create-new.component';
// Use fcRoot function to inject FusionCharts library, and the modules you want to use
FusionChartsModule.fcRoot(FusionCharts, Charts)

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
  
    SlideshowComponent,
    FooterComponent,
    // ProfileTutorComponent,
    // ProfileEditTutorComponent,
    // StudentHomeComponent,
    // TutorCardComponent,
    IntimateComponent,
    GraphComponent,
 
 
  
    BrasComponent,
  
    LogoutComponent,
  
    EditProfileComponent,
  
    QclistComponent,
  
    ChartComponent,
  
    IntimateListComponent,
  
    IntimateViewComponent,
  
    CreateNewComponent,
  
    SubmitComponent,
 
    ManagerEditProfileComponent,
    
  
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FusionChartsModule ,// Include in imports
    SharedModuleModule

  ],
  entryComponents:[
    EditProfileComponent,
   ManagerEditProfileComponent,
    ],
    
  providers: [
    RegisterService,
    AuthService,
    TutorCardListService,
    TutorAuthGuard,
    AuthGaurd,
   
    // ProfileEditService
  ],
  bootstrap: [AppComponent],
  exports:[SharedModuleModule]
})
export class AppModule { }
