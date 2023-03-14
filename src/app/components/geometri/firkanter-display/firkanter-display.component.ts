import { ParseFlags } from '@angular/compiler';
import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { GeometricShape, Square, Rectangle, Trapezoid, Parallelogram } from 'src/app/source/containers/geometric-shape';

@Component({
  selector: 'app-firkanter-display',
  templateUrl: './firkanter-display.component.html',
  styleUrls: ['./firkanter-display.component.css']
})
export class FirkanterDisplayComponent {
  // postForm(f:NgForm) {
  //   //Log user input in console
  //   console.log(f.value)
  // }
  squareObject = new Square(0, 0);
  rectangleObject = new Rectangle(0, 0);
  trapezoidObject = new Trapezoid(0, 0, 0);
  parallelogramObject = new Parallelogram(0, 0);
  shapeSelected = "";
  selectedObject : GeometricShape | undefined = undefined;

  value = '';
  base: number = 0;
  base2: number = 0;
  height: number = 0;
  objectArea: number = 0;
  objectPerimeter: number = 0;
  testModel: string = "";

  trapSelected: boolean = false;

  onSelected (value: string) {
    this.shapeSelected = value;    
    if(value === "Trapezium"){
      this.trapSelected = true;
    } else {
      this.trapSelected = false;
    }
  }

  baseSubmit(event: any) {
    console.log("change");
   this.base = event.target.player.value;
}

base2Submit(event: any) {
  this.base2 = event.target.player.value;
}

heightSubmit(event: any) {
  this.height = event.target.player.value;
}

  calculateDimensions() {
    switch(this.shapeSelected){
      case "Square":
        case "Rectangle":
          case "Parallelogram":       
             this.selectedObject = new Square(this.base, this.height);
             this.objectArea = this.selectedObject.calculateArea();
             this.objectPerimeter = this.selectedObject.calculateCircumference();
             break;
      case "Trapezium":
        let trap = new Trapezoid(this.base, this.height, this.base2);
        this.objectArea = trap.calculateArea();
        this.objectPerimeter = trap.calculateCircumference();
        break;
    }
  }

}
