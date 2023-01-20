import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { livedashboardComponent } from './livedashboard/livedashboard.component';

const routes: Routes = [
  {path: 'deshboard' , component:livedashboardComponent},
];


=======
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: 'deshboard' , component:DashboardComponent},
];

>>>>>>> 73e6e9e140c62b49d32d6130451a36dec562e160
@NgModule({
  imports: [RouterModule.forChild(routes),
],
  exports: [RouterModule]
})
export class DeshboardRoutingModule { }
