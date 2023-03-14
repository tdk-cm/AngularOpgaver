export class GeometricShape {
        base: number;
        height: number;

    constructor(base: number, height: number) {
        this.base = base;
        this.height = height;
    }    

    calculateCircumference() : number {
        return +(this.base * 2) +  +(this.height * 2);
    }

    calculateArea() : number {
        return this.base * this.height;
    }
}

export class Square extends GeometricShape {
   
}

export class Rectangle extends GeometricShape {
   
}

export class Parallelogram extends GeometricShape {

}

export class Trapezoid extends GeometricShape {
    baseTop: number;

    constructor(base: number, height: number, baseTop: number) {
        super(base, height);
        this.baseTop = baseTop;
    }
    override calculateCircumference() : number {
        return +this.base + +this.baseTop + +(this.height * 2);
    }

    override calculateArea() : number {
        let firstStep = (+this.base + +this.baseTop) / 2;
        return firstStep * this.height;
    }
}