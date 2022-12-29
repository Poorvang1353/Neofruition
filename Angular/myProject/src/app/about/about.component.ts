import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  numbers:Array<any> = [];
   constructor() {
      this.numbers = Array.from({length:10},(v,k)=>k+1);
   }
}