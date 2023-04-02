import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// }

@Injectable({
  providedIn: 'root'
})
export class ApiLoginService {
  url = 'http://192.168.0.4:9292/api/v1/login'
  constructor(private http: HttpClient, private router: Router) { }
  saveUsers(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }
  IsLoggedIn(){
    return localStorage.getItem('token')!=null;
  }
  gettoken(){
    return localStorage.getItem('token')||''
  }
}
