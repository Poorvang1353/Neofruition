import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const API_KEY='poorvang';
    const req = request.clone({
      setHeaders:{
        API_KEY,
      }
    })
    return next.handle(req);
  }

}
<<<<<<< HEAD

=======
>>>>>>> 73e6e9e140c62b49d32d6130451a36dec562e160
