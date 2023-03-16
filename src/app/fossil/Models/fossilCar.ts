export interface FossilCarListingData {
    rank: number,
    model: string | null,
    quantity: number | null,
    changeQuantityPercent: number | null, 
  }

// export class FossilCarListingData {
//   rank: number;
//   model: string | null;
//   quantity: string | number | null;
//   changeQuantityPercent: number | null;

//   constructor(rank: number, model: string, quantity: number, variance: number){
//     this.rank = rank;
//     this.model = model;
//     this.quantity = quantity;
//     this.changeQuantityPercent = variance;
//   }
// }