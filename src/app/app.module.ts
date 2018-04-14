import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './module/routing/routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoaderComponent } from './component/loader/loader.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
