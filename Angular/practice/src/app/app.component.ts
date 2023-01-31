import { Component } from '@angular/core';
import * as moment from 'moment';
import { from } from 'rxjs';

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

  today: any = moment([2023,1,13]);
  earlyday:any=moment();

  thisday:any = moment('2010-10-20').isBefore('2010-09-30');

  
}
