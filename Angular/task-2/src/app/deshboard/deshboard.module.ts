import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeshboardRoutingModule } from './deshboard-routing.module';
import { GoogleChartsModule } from 'angular-google-charts';
import { DynamicChartComponent } from './dynamic-chart/dynamic-chart.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DynamicChartComponent
  ],
  imports: [
    CommonModule,
    DeshboardRoutingModule,
    GoogleChartsModule,
    HttpClientModule
  ],

    

  
})
export class DeshboardModule { }
