import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  displayVal = '';
  getData(val: string) {
    console.log(val);
    this.displayVal = val
  }
  isdisable = true;
}
