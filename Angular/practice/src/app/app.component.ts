import { Component } from '@angular/core';
import { findIndex } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  uname = 'My name is Poorvang';
  username: any[] = [];
  getname(item: string) {
    this.username.push({ id: this.username, name: item });
  }
}
