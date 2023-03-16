import { Injectable } from '@angular/core';
import { from, of, Observable, Subject, ReplaySubject } from 'rxjs';
import { NewCardataComponent } from '../components/dialog/new-cardata/new-cardata.component';
import { FossilCarListingData } from '../Models/fossilCar';

@Injectable({
  providedIn: 'root'
})
export class FossilServiceService {

  // Data
  private carListings: FossilCarListingData[] = [];

  // Observable
  private carListingsData$: Subject<FossilCarListingData[]> = new Subject<FossilCarListingData[]>;
  carListing$: Observable<FossilCarListingData[]> = this.carListingsData$.asObservable();  


  constructor() { 

    this.carListings.push({rank: 1, model: 'Skoda Enyaq', quantity: 1044, changeQuantityPercent: 284});    
    this.carListings.push({rank: 2,	model: 'Citroën C3', quantity: 	2268,	changeQuantityPercent: -27});
    this.carListings.push({rank: 3,	model: 'Peugeot 208', quantity: 	2107,	changeQuantityPercent: -24});
    this.carListings.push({rank: 4,	model: 'Kia Ceed/Xceed', quantity: 	1750,	changeQuantityPercent: -1});
    this.carListings.push({rank: 5,	model: 'Ford Kuga', quantity: 	1619,	changeQuantityPercent: -53});
    this.carListings.push({rank: 6,	model: 'Toyota Yaris', quantity: 	1515,	changeQuantityPercent: -45});
    this.carListings.push({rank: 7,	model: 'VW T-Roc', quantity: 	1435,	changeQuantityPercent: -7});    
  }

  getCurrentData() {
    this.carListingsData$.next(this.carListings);
  }

  getMaxRank(): number {
    return this.carListings.length;
  }

  addCarData(newCarData: FossilCarListingData) {

    if(+newCarData.rank === 0){
      this.carListings.push({rank: this.carListings.length, model: newCarData.model, quantity: newCarData.quantity, changeQuantityPercent: newCarData.changeQuantityPercent});
      this.carListingsData$.next(this.carListings);
      return;
    } 

    // Adjust the chosen rank due tue visual table being index + 1
    let index = +newCarData.rank - 1;
    this.carListings.splice(index, 0, newCarData);

    this.recalculateCarsRanks();
     
  }

  editCarData(originalIndex: number, editCarData: FossilCarListingData){

    this.carListings[originalIndex - 1].model = editCarData.model;
    this.carListings[originalIndex - 1].quantity = editCarData.quantity;
    this.carListings[originalIndex - 1].changeQuantityPercent = editCarData.changeQuantityPercent;

    // INDEX

    if(originalIndex === editCarData.rank) return;
    
    if(+editCarData.rank === 0){
          // First of all, delete the current instance of
      this.deleteCarFromListing(originalIndex);

      this.carListings.push({rank: this.carListings.length, model: editCarData.model, quantity: editCarData.quantity, changeQuantityPercent: editCarData.changeQuantityPercent});
      this.carListingsData$.next(this.carListings);
      return;
    } else {
      [this.carListings[originalIndex - 1], this.carListings[editCarData.rank - 1]] = [this.carListings[editCarData.rank - 1], this.carListings[originalIndex - 1]];
    }    

    this.recalculateCarsRanks();
  }

  recalculateCarsRanks(){
    for (let i = 0; i < this.carListings.length; i++) {   
      this.carListings[i].rank = i + 1;
    }  
  }

  sortFunction(a: FossilCarListingData, b: FossilCarListingData) {
    if ( a.rank < b.rank ){
      return -1;
    }
    if ( a.rank > b.rank ){
      return 1;
    }
    return 0;
  }

  getCarAtIndex(index: number) :FossilCarListingData {
    return this.carListings[index];
  }



  moveCar(rank: number, direction: number) : void {
    if(rank + +direction < 0 || rank + +direction >= this.carListings.length){
      return;
    }

    [this.carListings[rank], this.carListings[rank + +direction]] = [this.carListings[rank + +direction], this.carListings[rank]];
  }

  deleteCarFromListing(rank: number){
    this.carListings.splice(rank, 1);
  }



  removeCarData(rank: number){
    let index = this.carListings.findIndex(x => x.rank === rank); 
    if(index !== -1){
       this.carListings.splice(index, 1);
       this.carListingsData$.next(this.carListings);
    }
  }

}
