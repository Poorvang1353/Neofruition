import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',

})
export abstract class BaseComponent implements OnInit {
  protected abstract title: string;

  ngOnInit() {
    this.initData();
    this.initPrivateBaseData();
  }
  
  protected abstract initData(): void

  public onTitleClick(): void {
    console.log(this.title);
  }

  private initPrivateBaseData() {
    console.log('initPrivateBaseData');
  }
  
}
