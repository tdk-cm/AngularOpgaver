import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FossilCarListingData } from '../fossil/Models/fossilCar';
import { FossilServiceService } from '../fossil/services/fossil-service.service';

@Component({
  selector: 'app-car-ligsting-detail',
  templateUrl: './car-ligsting-detail.component.html',
  styleUrls: ['./car-ligsting-detail.component.css']
})
export class CarLigstingDetailComponent {

  carId: number | null;
  carData: FossilCarListingData | undefined ;

  constructor(private route: ActivatedRoute, private fossilService: FossilServiceService) {
    this.carId = -1;
  }

  ngOnInit() {
    console.log("init")
    this.route.paramMap.subscribe(params => {
      let s: string | null = params.get('carId');

      if(s !== null){
        this.carId = parseInt(s);
        this.carData = this.fossilService.getCarAtIndex(this.carId);
      }
    });

    

  }
}
