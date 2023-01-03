import { Component } from '@angular/core';
import {FormControl, Validator, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular basic pipe';
  today = Date();

  capString(item:string){
      return item.toUpperCase();
  }

  user={
    name : 'poorvang',
    age : 21
  }

  userLogin(item:any){
      console.warn(item);
  }

  loginForm= new FormGroup({
    users : new FormControl('',[Validators.required,Validators.pattern('[azA-z]+$')]),
    password : new FormControl('',[Validators.required, Validators.minLength(5)]),
  })

  loginUser(){
    console.warn(this.loginForm.value);
  }

  get users(){
    return this.loginForm.get('users')
  }
  get password(){
    return this.loginForm.get('password')
  }
}
