import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent { 
  @Input()  uname!: string;
  @Output() newChild = new EventEmitter<string>();

  addNewchild(value:string){
    this.newChild.emit(value);
  }
}

