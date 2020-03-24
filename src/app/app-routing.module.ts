import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { AboutComponent } from "./components/about/about.component";
import { FingerNailsComponent } from "./components/finger-nails/finger-nails.component";
import { ToeNailsComponent } from "./components/toe-nails/toe-nails.component";

const ROUTES: Routes = [
  { path: 'home', component : HomeComponent},
  { path: 'finger-nails', component : FingerNailsComponent},
  { path: 'toe-nails', component : ToeNailsComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
