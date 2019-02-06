import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AddJokeComponent } from './addJoke/addJoke.component';
import { Top10Component } from './top10/top10.component';
import { JokeDetailsComponent } from './jokeDetails/jokeDetails.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'add-joke', component: AddJokeComponent },
  { path: 'top10', component: Top10Component },
  { path: 'joke/:id', component: JokeDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
