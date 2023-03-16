import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'morsePipe'
})
export class MorsePipePipe implements PipeTransform {

    


  transform(value: string, ...args: unknown[]): unknown {
    return null;
  }

  

}
