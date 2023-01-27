import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiLoginService } from '../api-login.service';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor(private inject:Injector) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const API_KEY='poorvang';
    let authservice = this.inject.get(ApiLoginService);
    const req = request.clone({
      setHeaders:{
        Authorization:authservice.gettoken()
      }
    })
    return next.handle(req);
  }

}

