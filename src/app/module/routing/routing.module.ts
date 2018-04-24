import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../../component/home/home.component';

/**
 * Url paths for app routing.
 * @type {Routes}
 */
const routes: Routes = [
  { path: '**', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule { }
