import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pipe-showcase',
  templateUrl: './pipe-showcase.component.html',
  styleUrls: ['./pipe-showcase.component.css']
})
export class PipeShowcaseComponent {
  pipeInputForm: FormGroup;
  validPipes: string[] = [];
  submittedText: string;

  constructor() {
    this.submittedText = "";

    this.pipeInputForm = new FormGroup({
      pipeType: new FormControl('', [
        Validators.required          
      ]),
      textInput: new FormControl('', [
        Validators.required
      ])
    });

    this.validPipes.push("Morse");
    this.validPipes.push("MD5");
    this.validPipes.push("Italian");
    this.validPipes.push("Reverse");
    this.validPipes.push("Scrambled");
    this.validPipes.push("Ascii");

  }

  getErrorName(inputId: string): string {
    if(this.inputHasError(inputId, "required")){
      return "Required input."
    }
    
    return "";
  }

  allInputValid(): boolean | undefined {   
    return  this.pipeInputForm.get('pipeType')?.valid &&
            this.pipeInputForm.get('textInput')?.valid
}

  inputHasError(inputId: string, error: string) : boolean{
    if(this.pipeInputForm.get(inputId)?.hasError(error)){
      return true;
    }    

    return false;
  }

  onSubmit() {
    if(!this.allInputValid()) return;

    this.submittedText = this.pipeInputForm.get('textInput')?.value;
  }
}
