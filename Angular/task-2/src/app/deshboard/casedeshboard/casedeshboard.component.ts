import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-casedeshboard',
  templateUrl: './casedeshboard.component.html',
  styleUrls: ['./casedeshboard.component.css']
})
export class CasedeshboardComponent {
  constructor(private router: Router){}
  goto(){
    this.router.navigate(['livedashboard'])
  }
}
