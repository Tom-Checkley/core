import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/shared/interfaces/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User;
  email: string;
  password: string;
  confirmPw: string;
  pwMatch: boolean;

  constructor() { }

  ngOnInit() {
  }

  register() {
    if (this.password !== this.confirmPw) {
      this.pwMatch = false;
      return false;
    }
    this.user = {
      email: this.email,
      password: this.password
    };
  }

}
