import { Component } from '@angular/core';

class CarListingDetails {
  carModel: string;
  quantity: string;
  variance: string;

  constructor(model: string, quantity: string, variance: string){
    this.carModel = model;
    this.quantity = quantity;
    this.variance = variance;
  }

}

@Component({
  selector: 'app-cars-listing',
  templateUrl: './cars-listing.component.html',
  styleUrls: ['./cars-listing.component.css']
})
export class CarsListingComponent {

  carData: CarListingDetails[] = [];

  constructor(){

    this.carData.push(new CarListingDetails("Citroën C3",	"2.268",	"-27%"));
    this.carData.push(new CarListingDetails("Peugeot 208",	"2.107",	"-24%"));
    this.carData.push(new CarListingDetails("Kia Ceed/Xceed",	"1.750",	"-1%"));
    this.carData.push(new CarListingDetails("Ford Kuga",	"1.619", "-53%"));
    this.carData.push(new CarListingDetails("Toyota Yaris",	"1.515",	"-45%"));
    this.carData.push(new CarListingDetails("VW T-Roc",	"1.435",	"-7%"));
    this.carData.push(new CarListingDetails("Mercedes-Benz C-klasse",	"1.361",	"-9%"));
    this.carData.push(new CarListingDetails("Hyundai i10",	"1.300",	"-26%"));
    this.carData.push(new CarListingDetails("Nissan Qashqai",	"1.246",	"-42%"));
    this.carData.push(new CarListingDetails("Toyota Yaris Cross",	"1.114",	"100%"));
    this.carData.push(new CarListingDetails("Toyota Aygo X",	"1.105",	"100%"));
    this.carData.push(new CarListingDetails("Peugeot 2008",	"1.067",	"-29%"));
    this.carData.push(new CarListingDetails("Skoda Enyaq",	"1.044",	"284%"));
    this.carData.push(new CarListingDetails("Hyundai i20",	"1.043",	"3%"));
    this.carData.push(new CarListingDetails("VW Polo",	"1.031",	"-30%"));
    this.carData.push(new CarListingDetails("Peugeot 3008",	"1.028",	"-22%"));
    this.carData.push(new CarListingDetails("Tesla Model Y",	"989",	"100%"));
    this.carData.push(new CarListingDetails("VW Taigo",	"978",	"100%"));
    this.carData.push(new CarListingDetails("BMW 3-serie",	"960",	"-50%"));
    this.carData.push(new CarListingDetails("Opel Corsa",	"944",	"-53%"));
    this.carData.push(new CarListingDetails("Toyota Corolla",	"935",	"-4%"));
    this.carData.push(new CarListingDetails("Cupra Formentor",	"868",	"145%"));
    this.carData.push(new CarListingDetails("Volvo XC40", "842",	"1%"));
    this.carData.push(new CarListingDetails("Polestar 2",	"836",	"1990%"));
    this.carData.push(new CarListingDetails("VW T-Cross",	"831",	"-37%"));


  }
}
