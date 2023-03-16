import { ChangeDetectorRef, NgZone, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slowtype'
})
export class SlowtypePipe {


  constructor(
  ) {
  }

  transform(value: string, mintypingSpeed: number = 30): any {
     
     return null;
  }  
}
