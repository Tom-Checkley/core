import { Component, OnInit } from '@angular/core';

import { User } from '../../../shared/interfaces/user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User;
  email: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  login() {
    this.user = {
      email: this.email,
      password: this.password
    };
    console.log(this.user);
  }

}
