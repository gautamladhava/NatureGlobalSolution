import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutCtnComponent } from './component/about-ctn/about-ctn.component';
import { ShipperPageComponent } from './component/shipper-page/shipper-page.component';
import { MrnPageComponent } from './component/mrn-page/mrn-page.component';
import { MrnLoginComponent } from './component/mrn-login/mrn-login.component';
import { ForgotPassowrdComponent } from './component/forgot-passowrd/forgot-passowrd.component';
import { MrnRegistrationComponent } from './component/mrn-registration/mrn-registration.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutCtnComponent},
  {path:"shipper",component:ShipperPageComponent,children:[
    
    {path:"",redirectTo:"mrn_login",pathMatch:"full"},
    {path:"mrn_login",component:MrnLoginComponent},
    {path:"forgot_password",component:ForgotPassowrdComponent},
    {path:"mrn_registration",component:MrnRegistrationComponent},

  ]},
  {path:"mrn",component:MrnPageComponent,children:[
    {path:"",redirectTo:"mrn_login",pathMatch:"full"},
    {path:"mrn_login",component:MrnLoginComponent},
    {path:"forgot_password",component:ForgotPassowrdComponent},
    {path:"mrn_registration",component:MrnRegistrationComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
