import { Component, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FossilCarListingData } from '../../Models/fossilCar';
import { FossilServiceService } from '../../services/fossil-service.service';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { NewCardataComponent } from '../dialog/new-cardata/new-cardata.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fossil-biler',
  templateUrl: './fossil-biler.component.html',
  styleUrls: ['./fossil-biler.component.css']
})
export class FossilBilerComponent {

  carDetails$: Observable<FossilCarListingData[]> | undefined;

  constructor(private fossilService : FossilServiceService, private dialog: MatDialog, public router: Router){    
    this.fossilService.carListing$.subscribe((data: FossilCarListingData[]) => {
      next: {
        this.carDetails$ =  of(data);
      }
    });

    this.fossilService.getCurrentData();
  }

  moveCarUp(index: number): void {
    this.fossilService.moveCar(index, -1);

  }

  moveCarDown(index: number): void {
    this.fossilService.moveCar(index, 1);
  }

  deleteCarFromListing(index: number): void {
    this.fossilService.deleteCarFromListing(index);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewCardataComponent, {
      width: '650px',
      height: '260px',
      data: undefined,      
    });

    dialogRef.afterClosed().subscribe((result: FossilCarListingData) => {
    });
  }

  openEditDialog(rank: number): void {
    const dialogRef = this.dialog.open(NewCardataComponent, {
      width: '650px',
      height: '260px',
      data: this.fossilService.getCarAtIndex(rank),      
    });

    dialogRef.afterClosed().subscribe((result: FossilCarListingData) => {
    });
  }


}

