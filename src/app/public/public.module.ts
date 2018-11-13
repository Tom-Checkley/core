import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  declarations: [AboutComponent]
})
export class PublicModule { }
