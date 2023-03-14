import { Component } from '@angular/core';
import { BoyBand, ServiceObserveService } from '../services/service-observe.service'
import { from, of, Observable, Subject } from 'rxjs';
import { compilePipeFromMetadata } from '@angular/compiler';
@Component({
  selector: 'app-observable-environment',
  templateUrl: './observable-environment.component.html',
  styleUrls: ['./observable-environment.component.css']
})
export class ObservableEnvironmentComponent {
  observableBoyband$: Observable<BoyBand> | undefined;
 
  constructor(private obsService : ServiceObserveService){
    
  }

  private boyBand: BoyBand = new BoyBand("", 0);

  getObserver(){
    const myObserver = {
      next: (x: BoyBand) => console.log('Boyband Name: ' + x.name),
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    };
  }

  getCurrentBoyBand(){
    return this.observableBoyband$;
  }


  getRandomBoyBand() {
    this.obsService.emitRandomBoyBand().subscribe((boyBand: BoyBand) => {
      next: {
        this.observableBoyband$ =  of(boyBand);
      }
    });
  }
}
