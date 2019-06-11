import { SubmitComponent } from './submit/submit.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { IntimateListComponent } from './intimate-list/intimate-list.component';
import { IntimateViewComponent } from './intimate-view/intimate-view.component';
import { QclistComponent } from './qclist/qclist.component';
import { LogoutComponent } from './logout/logout.component';

import { BrasComponent } from './graph/bras/bras.component';


import { GraphComponent } from './graph/graph.component';

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGaurd } from './services/auth-gaurd.service';
// import { ProfileTutorComponent } from './profile-tutor/profile-tutor.component';
// import { ProfileEditTutorComponent } from './profile-edit-tutor/profile-edit-tutor.component';
// import { StudentHomeComponent } from './student-home/student-home.component';
import { TutorAuthGuard } from './services/tutor-auth-guard.service';
// import { StudentAuthGuard } from './services/student-auth-gaurd.service';

import { from } from 'rxjs';
import { IntimateComponent } from './intimate/intimate.component';
import { ChartComponent } from './chart/chart.component';

export const appRoutes: Routes = [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: "\login",
        component: LoginComponent
      },
      {
        path: "\signup",
        component: RegisterComponent
      },
      
       
          {
            path:"\intimate",
            component:IntimateComponent,
          },
         
          {
            path: 'chart/:id',
            component: ChartComponent,
          },

          {
            path:"\graph",
            component:GraphComponent,
           
            
          },
         
        
      {
          path:"\logout",
          component:LogoutComponent,
      },
      {
        path: 'qlist',
        component: QclistComponent
      }, 
      {
        path: 'intimate-list',
        component: IntimateListComponent
      },
      {
        path: 'intimate-view/:id',
        component: IntimateViewComponent
      }, 
      {
        path: 'create-new',
        component: CreateNewComponent
      }, 
      {
        path: 'submit',
        component: SubmitComponent
      },
      
    

        
      
      
]
