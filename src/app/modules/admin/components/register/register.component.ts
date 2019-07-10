import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/modules/shared/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';


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

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    if (this.password !== this.confirmPw) {
      this.pwMatch = false;
      return false;
    }
    console.log(this.user, this.password);
    this.authService.register(this.email, this.password);

  }

}
