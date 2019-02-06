import { Component, OnInit, Inject } from '@angular/core';
import { Joke, JokeToApi, RequestArguments } from '../models';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { timeout } from 'q';
import { Router } from '@angular/router';

@Component({
  selector: 'addJokeComponent',
  templateUrl: './addJoke.component.html',
  styleUrls: ['./addJoke.component.css']
})
export class AddJokeComponent implements OnInit {
  http: HttpClient;
  public joke: JokeToApi;
  public isResult : boolean;
  constructor(http: HttpClient, private router: Router) {
    this.http = http;
  }

  ngOnInit(): void {
    this.joke = new JokeToApi();
  }

  submit(content:string, description:string) {
    let jokeApi = new JokeToApi();
    jokeApi.content = content;
    jokeApi.description = description;
    var formData = new FormData();
    formData.append('content', content);
    formData.append('description',description);
    let args: RequestArguments;
    if (args == null) { args = {}; }
        if (args.headers === undefined) { 
            args.headers = new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json'); 
        }
        args.withCredentials = false;
        args.responseType = 'json';


    this.http.post('https://localhost:44360/api/Jokes', formData,
    {headers: args.headers, observe: args.observe,
      params: args.params, reportProgress: args.reportProgress, responseType: args.responseType,
      withCredentials: args.withCredentials
  }
).subscribe(result => {

      });
      this.returnToMain();
  }

  returnToMain() {
    this.router.navigate(['']);
  }
}

