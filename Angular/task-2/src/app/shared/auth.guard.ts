import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiLoginService } from '../api-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service:ApiLoginService,private router:Router){}
  canActivate() {
    if(this.service.IsLoggedIn()){

      return true;
    }
    else{
      this.router.navigate([''])
      return false;
    }
  }
  
}
