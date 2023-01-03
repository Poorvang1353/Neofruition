import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {

  constructor(private _http:HttpClient) { }

  getAllUsers(){
    return this._http.get('https://reqres.in/api/users?per_page=12');
  }
}

