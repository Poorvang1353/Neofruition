import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { livedashboardComponent } from './livedashboard/livedashboard.component';

const routes: Routes = [
  {path: 'deshboard' , component:livedashboardComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes),
],
  exports: [RouterModule]
})
export class DeshboardRoutingModule { }
