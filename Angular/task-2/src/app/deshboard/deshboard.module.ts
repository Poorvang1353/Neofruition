import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeshboardRoutingModule } from './deshboard-routing.module';
import { GoogleChartsModule } from 'angular-google-charts';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DeshboardRoutingModule,
    GoogleChartsModule,
    
  ],
  
})
export class DeshboardModule { }
