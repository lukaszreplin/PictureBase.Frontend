import { HttpHeaders, HttpParams } from '@angular/common/http';

export class JokeToApi {
    content: string;
    description: string;
}

export interface Joke {
    id: string;
    jokeId: string;
    content: string;
    descrption: string;
    addedDate: string;
    rate: string;
}

export interface SmallJoke {
    id: string;
    rate: string;
}

export interface RequestArguments {
    headers?: HttpHeaders | null;
    observe?: "body" | null;
    params?: HttpParams | null;
    reportProgress?: boolean | null;
    withCredentials?: boolean | null;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text' | null;
}
