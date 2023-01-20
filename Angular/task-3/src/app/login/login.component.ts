import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  users:any;
  constructor(private authService:AuthServiceService){
    this.authService.GetLoginDetails().subscribe((data)=>{
      console.warn("data",data)
      this.users=data;
    })
  }
  ngOnInit() {
      this.initForm
  }
  initForm(){
    this.formGroup = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }
  loginProcess(){
    if(this.formGroup.valid){
      this.authService.login(this.formGroup.value).subscribe(result =>{
        if(result.success){
          console.log(result);
          alert(result.message);
        }
        else{
          alert(result.message);
        }
      })
    }
  }
}
