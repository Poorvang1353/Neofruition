import { Component } from '@angular/core';
import { SideObject } from '@popperjs/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Poorvang';
  username: string = "This is import from the Child class";
  child = ['poorvang', 'Deep', 'Krish'];

  addChild(newChild: string) {
    this.child.push(newChild);
  }
}

