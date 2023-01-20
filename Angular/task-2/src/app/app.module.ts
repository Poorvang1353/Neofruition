import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoggingInterceptor } from './login/logging.interceptor';
import { livedashboardComponent } from './deshboard/livedashboard/livedashboard.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BnNgIdleModule } from 'bn-ng-idle';
import { CasedeshboardComponent } from './deshboard/casedeshboard/casedeshboard.component';
import { RegistrationFormComponent } from './forms/registration-form/registration-form.component';

=======
import { FormsModule } from '@angular/forms';
import { LoggingInterceptor } from './login/logging.interceptor';
import { DashboardComponent } from './deshboard/dashboard/dashboard.component'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeshboardModule } from './deshboard/deshboard.module';
import { BnNgIdleModule } from 'bn-ng-idle';
>>>>>>> 73e6e9e140c62b49d32d6130451a36dec562e160
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
    livedashboardComponent,
    CasedeshboardComponent,
    RegistrationFormComponent
=======
    DashboardComponent
>>>>>>> 73e6e9e140c62b49d32d6130451a36dec562e160
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
<<<<<<< HEAD

    ToastrModule.forRoot({
      timeOut: 2000,
      preventDuplicates: true,

    }),
    BrowserAnimationsModule,


  ],
  providers: [BnNgIdleModule,
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
=======
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    
    
  ],
  providers: [BnNgIdleModule,
    { provide : HTTP_INTERCEPTORS, useClass:LoggingInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
>>>>>>> 73e6e9e140c62b49d32d6130451a36dec562e160
