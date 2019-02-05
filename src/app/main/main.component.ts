import { Component, OnInit, Inject } from '@angular/core';
import { Joke } from '../models';
import { HttpClient } from '@angular/common/http';
import { timeout } from 'q';

@Component({
  selector: 'main-comp',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  http: HttpClient;
  public jokes: Joke[];
  public isResult : boolean;
  constructor(http: HttpClient) {
    this.http = http;
  }

  getJokes() {
    this.http.get<Joke[]>('https://localhost:44360/api/Jokes/').subscribe(result => {
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

    async addPlus(id: string) {
        this.http.post('https://localhost:44360/api/Jokes/AddPlus/' + id, id ).subscribe(result => {

        });
        await delay(1000);
        this.getJokes();
    }

    async addMinus(id: string) {
        this.http.post('https://localhost:44360/api/Jokes/AddMinus/'+ id, id ).subscribe(result => {

        });
        await delay(1000);
        this.getJokes();
    }

    
}
async function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

