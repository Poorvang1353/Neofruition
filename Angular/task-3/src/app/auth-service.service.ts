import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {
  url = 'http://124.123.123.91:20080/api/v1/login';
  constructor(private http: HttpClient) {
  }
  
  GetLoginDetails() {
    return this.http.get(this.url);
  }

  login(data: any): Observable<any> {
    return this.http.post(this.url, data);
  }
}
