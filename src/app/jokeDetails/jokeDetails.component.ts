import { Component, OnInit, Inject } from '@angular/core';
import { Joke } from '../models';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'q';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'jokeDetails',
  templateUrl: './jokeDetails.component.html',
  styleUrls: ['./jokeDetails.component.css']
})
export class JokeDetailsComponent implements OnInit {
  jokeId: number;
  http: HttpClient;
  public joke: Joke;
  public isResult : boolean;
  constructor(http: HttpClient, private route: ActivatedRoute) {
    this.http = http;
  }



  getJoke() {
    this.route.params.subscribe(params => {
      this.jokeId = params['id'];
    });
    this.http.get<Joke>('https://localhost:44360/api/Jokes/JokeId/' + this.jokeId).subscribe(result => {
        this.joke = result;
        console.error(this.joke);
        this.isResult = true;
      }, error => {
        this.isResult = false;
      });
  }

  ngOnInit(): void {
    this.getJoke();
    }

    async addPlus(id: string) {
        this.http.post('https://localhost:44360/api/Jokes/AddPlus/' + id, id ).subscribe(result => {

        });
        await delay(1000);
        this.getJoke();
    }

    async addMinus(id: string) {
        this.http.post('https://localhost:44360/api/Jokes/AddMinus/'+ id, id ).subscribe(result => {

        });
        await delay(1000);
        this.getJoke();
    }

    
}
async function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

