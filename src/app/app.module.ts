import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroesService } from "./services/heroes.service";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { FingerNailsComponent } from './components/finger-nails/finger-nails.component';
import { ToeNailsComponent } from './components/toe-nails/toe-nails.component';
import { ToeNailsService } from "./services/toe-nails.service";
import { LightboxModule } from "ngx-lightbox";
import { ScrollingModule } from "@angular/cdk/scrolling";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    FingerNailsComponent,
    ToeNailsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    LightboxModule,
    ScrollingModule
  ],
  providers: [
    HeroesService,
    ToeNailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
