import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})

export class RegistrationFormComponent {

  dynamicFromArray: any;
  constructor(private httpClient: HttpClient) { }
  ngOnInit() {
    this.httpClient.get('/assets/project.json').subscribe(data => {
      this.dynamicFromArray = data;
      console.log(this.dynamicFromArray);
    })
  }
  registrationFrom = new FormGroup({
    firstName: new FormControl('', [Validators.required,Validators.minLength(2),Validators.maxLength(10)]),
    LName: new FormControl('', [Validators.required,Validators.minLength(2),Validators.maxLength(10)]),
    txtarea: new FormControl('',[Validators.required]),
    check: new FormControl('',[Validators.required,Validators.requiredTrue])
  })
  LoginUser() {
    console.warn(this.registrationFrom.value)
  }

  get firstName() {
    return this.registrationFrom.get('firstName ');
  }
  get LName() {
    return this.registrationFrom.get('LName');
  }
  get txtarea() {
    return this.registrationFrom.get('txtarea');
  }
  get check() {
    return this.registrationFrom.get('check');
  }
}
