import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideCammeratComponent } from './side-cammerat/side-cammerat.component';
import { FirkanterDisplayComponent } from './components/geometri/firkanter-display/firkanter-display.component';
import { FormsModule } from '@angular/forms';
import { BindingsExamplesComponent } from './bindings-examples/bindings-examples.component';
import { ObservableEnvironmentComponent } from './observable-environment/observable-environment.component';
import { DagensJokeComponent } from './jokes/components/dagens-joke/dagens-joke.component';
import { CarsListingComponent } from './cars/components/cars-listing/cars-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    SideCammeratComponent,
    FirkanterDisplayComponent,
    BindingsExamplesComponent,
    ObservableEnvironmentComponent,
    DagensJokeComponent,
    CarsListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
