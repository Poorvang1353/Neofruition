import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasedeshboardComponent } from './deshboard/casedeshboard/casedeshboard.component';

import { livedashboardComponent } from './deshboard/livedashboard/livedashboard.component';
import { RegistrationFormComponent } from './forms/registration-form/registration-form.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'livedashboard', component: livedashboardComponent,canActivate:[AuthGuard] },
  { path: 'casedashboard', component: CasedeshboardComponent,canActivate:[AuthGuard] },
  { path: 'registration', component: RegistrationFormComponent,canActivate:[AuthGuard] },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
