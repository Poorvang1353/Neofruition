import { Component } from '@angular/core';
import { BaseComponent } from '../base/base.component';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent extends BaseComponent {
  protected title = 'child component B';

  constructor() {
    super();
  }

  protected initData() {
    console.log('initDataB');
  }
}
