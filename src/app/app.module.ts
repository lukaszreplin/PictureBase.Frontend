import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AddJokeComponent } from './addJoke/addJoke.component';
import { Top10Component } from './top10/top10.component';
import { JokeDetailsComponent } from './jokeDetails/jokeDetails.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddJokeComponent,
    Top10Component,
    JokeDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
