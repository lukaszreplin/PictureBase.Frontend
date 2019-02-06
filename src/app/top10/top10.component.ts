import { Component, OnInit, Inject } from '@angular/core';
import { Joke, JokeToApi, RequestArguments, SmallJoke } from '../models';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { timeout } from 'q';
import { Router } from '@angular/router';

@Component({
  selector: 'top10',
  templateUrl: './top10.component.html',
  styleUrls: ['./top10.component.scss']
})
export class Top10Component implements OnInit {
  http: HttpClient;
  public jokes: SmallJoke[];
  public isResult : boolean;
  constructor(http: HttpClient) {
    this.http = http;
  }

  getJokes() {
    this.http.get<SmallJoke[]>('https://localhost:44360/api/Jokes/Top10').subscribe(result => {
        this.jokes = result;
        console.error(this.jokes);
        this.isResult = true;
      }, error => {
        this.isResult = false;
      });
  }

  ngOnInit(): void {
    this.getJokes();
    }

    
}


