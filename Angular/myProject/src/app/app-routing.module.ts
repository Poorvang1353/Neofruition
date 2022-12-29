import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CrudComponent } from './crud/crud.component';
import { LazyloadingComponent } from './lazyloading/lazyloading.component';

const routes: Routes = [
{path:'', component: HomeComponent},
{path:'about', component: AboutComponent},
{path:'crud', component: CrudComponent},
{path:'lazy', component: LazyloadingComponent},
{path:'lazy/admin',loadChildren:()=>import('./lazyloading/admin/admin.module').then(mod=>mod.AdminModule)},
{path:'lazy/user',loadChildren:()=>import('./lazyloading/user/user.module').then(mod=>mod.UserModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
