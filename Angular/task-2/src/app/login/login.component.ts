import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ApiLoginService } from '../api-login.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  users: any;
  constructor(private api: ApiLoginService,
    public toastrService: ToastrService, private router: Router) {
  }

  getUserFormData(data: any) {
    this.api.saveUsers(data).subscribe((result) => {

      localStorage.setItem("token", result.accessToken);
      if (result.status === 200) {
        this.router.navigate(['livedashboard']);
        console.log(result.status);
      }
      else {
        console.log("login failed ");
        this.toastrService.error("login failed");
      }

    }, error => {
      ////console.log(error);
      if (error.status == 401) {
        // this.loginService.loginError("Invalid login credentials");
        this.toastrService.error("Invalid login credentials", "Login Error");
      }
    }

    );
    
  }


}

