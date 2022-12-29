import { Component, OnInit } from '@angular/core';
import { ApiUserService } from '../api-user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  users:any = [];
  constructor(private _api: ApiUserService) { }

  ngOnInit() {
    this._api.getAllUsers().subscribe((Response: any) => this.users = Response.data);
  }
}
