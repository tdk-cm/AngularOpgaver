import { Injectable } from '@angular/core';
import { from, of, Observable, Subject } from 'rxjs';

export class BoyBand {
  name: string;
  members: number;

  constructor (name: string, members: number) {
      this.name = name;
      this.members = members;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ServiceObserveService {

  private boyBands: BoyBand[] = [];
  private boyBandsSubject$: Subject<BoyBand[]> = new Subject<BoyBand[]>;
  boyBands$: Observable<BoyBand[]> = this.boyBandsSubject$.asObservable();

  constructor() {
    this.boyBands = [
      new BoyBand("Backstreet Boys", 5),
      new BoyBand("New Kids on the Block", 3),
      new BoyBand("NSYNC", 5),
      new BoyBand("Boyz II Men", 4)
  ];
  }

  emitRandomBoyBand() : Observable<BoyBand> {
    return of(this.boyBands[Math.floor(Math.random() * this.boyBands.length)]);
  }
}
