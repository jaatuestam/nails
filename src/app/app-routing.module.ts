import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { HeroesComponent } from "./components/heroes/heroes.component";
import { AboutComponent } from "./components/about/about.component";

const ROUTES: Routes = [
  { path: 'home', component : HomeComponent},
  { path: 'heroes', component : HeroesComponent},
  { path: 'about', component : AboutComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {useHash : true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
