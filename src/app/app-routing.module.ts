import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AddJokeComponent } from './addJoke/addJoke.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'add-joke', component: AddJokeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
