import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main-component/navbar/navbar.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { AudiComponent } from './pages/audi/audi.component';
import { FiatComponent } from './pages/fiat/fiat.component';
import { FordComponent } from './pages/ford/ford.component';
import { HomeComponent } from './pages/home/home.component';
import { Pages404Component } from './pages/pages404/pages404.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AudiComponent,
    FiatComponent,
    FordComponent,
    HomeComponent,
    Pages404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
