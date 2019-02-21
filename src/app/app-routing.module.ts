import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { LogInComponent } from './Component/log-in/log-in.component';
import { HomeComponent } from './Component/home/home.component';
import { ProfileComponent } from './Component/profile/profile.component';
const appRoutes: Routes = [
  
  {
   path: '',
    redirectTo: '/home',
    pathMatch: 'full' 
    /*children: [
      { */
      //  path: 'service-provider', 
    //  component: ServiceProviderComponent
    //}
  //]
  },
  { 
    path: 'home', 
 component: HomeComponent
},
{ 
  path: 'sign-up', 
component: SignUpComponent
},
{ 
  path: 'log-in', 
component: LogInComponent
},
{ 
  path: 'profile', 
component: ProfileComponent
},


/*   {
    path: '',
    redirectTo: 'new-contact',
    pathMatch: 'full'
  },
 */];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
    
  ]
})
export class AppRoutingModule { 
  
}
