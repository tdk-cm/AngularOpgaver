import { Pipe, PipeTransform } from '@angular/core';
import { morseToLetter, letterToItalian, letterToMorse } from './data/textTranslationData';
import {Md5} from 'ts-md5';

@Pipe({
  name: 'text'
})
export class TextPipe implements PipeTransform {

  transform(value: string | null, args: string): unknown {

    if(value !== null){
      switch(args){
        case "morse":
          return this.stringToMorse(value);
  
          case "plain":
            return this.morseToString(value);
  
            case "italian":
              return this.stringToItalian(value);
  
              case "md5":
                return this.stringToMd5(value);
      }
    }
   
    return null;
  }

  stringToMorse(input: string): string {
    let output: string = "";

    for (let i = 0; i < input.length; i++) {     
      if(input[i] === ' '){
        output += '   ';
      } else {
        if(letterToMorse.has(input[i])){
          output += letterToMorse.get(input[i])
        }
      }
    }

    return output;
  }

  morseToString(input: string): string {
    let output: string = "";
    for (let i = 0; i < input.length; i++) {     
      if(input[i] === " "){
        output += "   ";
      } else {
        if(morseToLetter.has(input[i])){
          output += morseToLetter.get(input[i])
        }
      }
    }

    return output;
  }

  stringToItalian(input: string): string {
    let output: string = "";
    for (let i = 0; i < input.length; i++) {         
      if(letterToItalian.has(input[i])){
        output += letterToItalian.get(input[i])
        
      }

      output += ' ';
    }

    return output;
  }

   stringToMd5(input: string): string {
    return Md5.hashStr(input);
   }
}