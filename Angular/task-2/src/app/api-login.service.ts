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
  url = 'http://124.123.123.91:20080/api/v1/login'
  constructor(private http: HttpClient, private router: Router) { }
  saveUsers(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }
<<<<<<< HEAD
  IsLoggedIn(){
    return localStorage.getItem('token')!=null;
  }
=======
>>>>>>> 73e6e9e140c62b49d32d6130451a36dec562e160
}
