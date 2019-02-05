import { Component, OnInit, Inject } from '@angular/core';
import { Joke, JokeToApi } from '../models';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'q';

@Component({
  selector: 'addJokeComponent',
  templateUrl: './addJoke.component.html',
  styleUrls: ['./addJoke.component.css']
})
export class AddJokeComponent implements OnInit {
  http: HttpClient;
  public joke: JokeToApi;
  public isResult : boolean;
  constructor(http: HttpClient) {
    this.http = http;
  }

  // getJokes() {
  //   this.http.get<Joke[]>('https://localhost:44360/api/Jokes/').subscribe(result => {
  //       this.jokes = result;
  //       console.error(this.jokes);
  //       this.isResult = true;
  //     }, error => {
  //       this.isResult = false;
  //     });
  // }

  ngOnInit(): void {
    this.joke = new JokeToApi();
    }
    

    submit(content:string, description:string) {
      this.http.post('https://localhost:44360/api/Jokes/' + content + '/' + description, this.joke ).subscribe(result => {

        });
    }
}

