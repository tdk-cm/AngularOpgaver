import { Component } from '@angular/core';
import { JokesServiceService } from '../../services/jokes-service.service';
import { from, of, Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-dagens-joke',
  templateUrl: './dagens-joke.component.html',
  styleUrls: ['./dagens-joke.component.css']
})
export class DagensJokeComponent {

  observableFirstJoke$: Observable<string> | undefined;
  observablePunchJoke$: Observable<string> | undefined;

  constructor(private jokesService: JokesServiceService){
    this.jokesService.jokeStart$.subscribe((startLine: string) => {
      next: {
        this.observableFirstJoke$ =  of(startLine);
      }
    });

    this.jokesService.jokePunch$.subscribe((punch: string) => {
      next: {
        this.observablePunchJoke$ =  of(punch);
      }
    });
  }


  
  startTellingJoke() {
    
    this.jokesService.startJoke();
  }
}



