import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FossilCarListingData } from '../../../Models/fossilCar';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FossilServiceService } from 'src/app/fossil/services/fossil-service.service';
import { last } from 'rxjs';

@Component({
  selector: 'app-new-cardata',
  templateUrl: './new-cardata.component.html',
  styleUrls: ['./new-cardata.component.css']
})
export class NewCardataComponent {

  carInputform: FormGroup;
  lastRankSelected: boolean;
  selectedRank = "Last";
  currentRanks : number[] = [];
  editIndex: number;
  carToEdit: FossilCarListingData | undefined;

  constructor(
    public dialogRef: MatDialogRef<NewCardataComponent>,
    private fossilService: FossilServiceService,
    @Inject(MAT_DIALOG_DATA) public data: FossilCarListingData) {
 
      this.editIndex = -1;
      this.lastRankSelected = true;
      this.currentRanks = Array(this.fossilService.getMaxRank()).fill(0);

      this.carInputform = new FormGroup({
        rank: new FormControl('', [
          Validators.required          
        ]),
        modelName: new FormControl('', [
          Validators.required
        ]),
        quantity: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[0-9]*$/) // match only whole numbers
        ]),
        variance: new FormControl('', [
          Validators.required,
          Validators.pattern(/^-?\d*\.?\d*$/) // match positive and negative whole or decimal numbers (with . ) and has to end with % sign
        ])
      });

      if(this.data !== undefined){
        this.carToEdit = this.data;
        this.editIndex = this.carToEdit.rank;
        this.carInputform.get('rank')?.setValue(this.carToEdit?.rank);
        this.carInputform.get('modelName')?.setValue(this.carToEdit?.model);
        this.carInputform.get('quantity')?.setValue(this.carToEdit?.quantity);
        this.carInputform.get('variance')?.setValue(this.carToEdit?.changeQuantityPercent);
      }    

    }


    

  checkModelNameValid() {
    return this.carInputform.get('modelName')?.valid;
  }

  checkQuantityValid() {
    return this.carInputform.get('quantity')?.valid;
  }

  checkVarianceValid() {
    return this.carInputform.get('variance')?.valid;
  }

  getErrorName(inputId: string) : string {

    // Always check this first
    if(this.inputHasError(inputId, "required")){
      return "Required input."
    }

    if(this.inputHasError(inputId, "pattern")){
      switch(inputId){
        case "rank":
          return "Rank must only include whole positive numbers.";

        case "modelName":
          break;

        case "quantity":{
          return "Quantity must only include whole positive numbers."
        }

        case "variance": {
          return "Only positive or negative percent values are allowed.";
        }
      }
    }
    

    return ""; 
  }

  inputHasError(inputId: string, error: string) : boolean{
    if(this.carInputform.get(inputId)?.hasError(error)){
      return true;
    }    

    return false;
  }

  allInputValid(): boolean | undefined {   
      return  this.carInputform.get('rank')?.valid &&
              this.carInputform.get('modelName')?.valid &&
              this.carInputform.get('quantity')?.valid &&
              this.carInputform.get('variance')?.valid    
  }

  onSubmit() {
    if(!this.allInputValid()) return;

    const newCar = {} as FossilCarListingData;
    newCar.rank = this.carInputform.get('rank')?.value;
    newCar.model = this.carInputform.get('modelName')?.value;
    newCar.quantity = this.carInputform.get('quantity')?.value;
    newCar.changeQuantityPercent = this.carInputform.get('variance')?.value;

    if(this.editIndex !== -1){
      this.fossilService.editCarData(this.editIndex, newCar);
    } else {
      this.fossilService.addCarData(newCar);
    }

    this.dialogRef.close({ newCar: newCar});
  }

  onNoClick(): void {
    this.dialogRef.close({ newCar: undefined});
  }

  cancelOperation(): void {
    this.dialogRef.close({ newCar: undefined});
  }

}

// this.inputform = new FormGroup({
//   name: new FormControl(this.hero.name, [
//     Validators.required,
//     Validators.minLength(4),
//     forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
//   ]),
//   alterEgo: new FormControl(this.hero.alterEgo),
//   power: new FormControl(this.hero.power, Validators.required)
// });