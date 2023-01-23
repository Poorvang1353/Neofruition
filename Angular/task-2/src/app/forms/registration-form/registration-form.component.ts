import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})

export class RegistrationFormComponent {

  dynamicFromArray: any;
  submitted = false;
  constructor(private httpClient: HttpClient,private router: Router) { }
  ngOnInit() {
    this.httpClient.get('/assets/project.json').subscribe(data => {
      this.dynamicFromArray = data;
      console.log(this.dynamicFromArray);
    })
  }
  registrationFrom = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]),
    comments: new FormControl('', [Validators.required]),
    agreeTerms: new FormControl('', [Validators.required, Validators.requiredTrue])
  })
  LoginUser() {
    console.warn(this.registrationFrom.value)
    this.submitted = true;
    if (this.registrationFrom.invalid) {
      return
    }
    alert("success")
  }

  get firstName() {
    return this.registrationFrom.get('firstName ');
  }
  get lastName() {
    return this.registrationFrom.get('lastName');
  }
  get comments() {
    return this.registrationFrom.get('comments');
  }
  get agreeTerms() {
    return this.registrationFrom.get('agreeTerms');
  }

  livedashboard() {
    this.router.navigate(['livedashboard'])
  }
}
