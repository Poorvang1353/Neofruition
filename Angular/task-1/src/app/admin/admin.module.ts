import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
  
})
export class AdminModule { 
}
