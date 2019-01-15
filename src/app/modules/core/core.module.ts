import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PublicModule } from '../public/public.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PublicModule
  ],
  declarations: [
    HeaderComponent,
    NavComponent,
    HomeComponent,
    FooterComponent
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,

  ]
})
export class CoreModule { }
