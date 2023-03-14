import { Injectable } from '@angular/core';
import { DailyJoke } from '../Models/jokes-model';
import { from, of, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokesServiceService {



  private jokes: DailyJoke[] = [];
  private currentJoke: DailyJoke | undefined;
  private jokeStartLine$: Subject<string> = new Subject<string>;
  jokeStart$: Observable<string> = this.jokeStartLine$.asObservable();

  private jokePunchLine$: Subject<string> = new Subject<string>;
  jokePunch$: Observable<string> = this.jokePunchLine$.asObservable();

  constructor() {
    this.currentJoke = new DailyJoke("", "");
    this.fillJokes();
   }

   async startJoke() {
    this.jokeStartLine$.next("");
    this.jokePunchLine$.next("");

    this.currentJoke = this.jokes[Math.floor(Math.random() * this.jokes.length)];
    this.jokeStartLine$.next(this.currentJoke.firstPart);

    await new Promise(f => setTimeout(f, 3000));

    this.jokePunchLine$.next(this.currentJoke.punchline);

   }

  
fillJokes(){
  this.jokes.push(new DailyJoke("Two blind dudes are fighting really viciously. How do you stop them?", "You shout, “I’m betting on the dude with the knife!”"));
  this.jokes.push(new DailyJoke("What’s yellow and hurts when it gets in your eye?", "A bulldozer."));
  this.jokes.push(new DailyJoke("Why do scuba divers fall backwards off of the boat?", "Because if they fell forward, they’d still be on the boat."));
}

  emitRandomJokeFirstPart() : Observable<string> {
    return of(this.jokes[0].firstPart);
  }
}
