import { Component, OnInit } from '@angular/core';
import { ApiUserService } from '../api-user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {

  constructor(private _api: ApiUserService) { }

  ngOnInit() {
    this._api.getAllUsers().subscribe();
  }
}
