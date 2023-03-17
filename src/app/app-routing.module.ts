import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarLigstingDetailComponent } from './car-ligsting-detail/car-ligsting-detail.component';
import { CarsListingComponent } from './cars/components/cars-listing/cars-listing.component';
import { FirkanterDisplayComponent } from './components/geometri/firkanter-display/firkanter-display.component';
import { FossilBilerComponent } from './fossil/components/fossil-biler/fossil-biler.component';
import { DagensJokeComponent } from './jokes/components/dagens-joke/dagens-joke.component';
import { ObservableEnvironmentComponent } from './observable-environment/observable-environment.component';
import { PipeShowcaseComponent } from './pipes/components/pipe-showcase/pipe-showcase.component';

const routes: Routes = [
  { path: 'geometri', component:  FirkanterDisplayComponent},
  { path: 'observable', component:  ObservableEnvironmentComponent},
  { path: 'jokes', component:  DagensJokeComponent},
  { path: 'elbiler', component:  CarsListingComponent},
  { path: 'elbiler/:carId', component: CarLigstingDetailComponent },
  { path: 'fossilbiler', component:  FossilBilerComponent},
  { path: 'pipes', component:  PipeShowcaseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
