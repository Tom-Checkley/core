import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    AdminComponent,
    AdminNavComponent,
    RegisterComponent
  ],
  exports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
