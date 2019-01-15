import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './modules/core/components/home/home.component';
// import { AboutComponent } from './public/components/about/about.component';
// import { AdminComponent } from './admin/components/admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'public', loadChildren: './modules/public/public.module#PublicModule' },
  { path: 'shared', loadChildren: './modules/shared/shared.module#SharedModule' },
  { path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
