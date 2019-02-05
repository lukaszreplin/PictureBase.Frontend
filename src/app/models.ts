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