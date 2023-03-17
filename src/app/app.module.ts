import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SideCammeratComponent } from './side-cammerat/side-cammerat.component';
import { FirkanterDisplayComponent } from './components/geometri/firkanter-display/firkanter-display.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BindingsExamplesComponent } from './bindings-examples/bindings-examples.component';
import { ObservableEnvironmentComponent } from './observable-environment/observable-environment.component';
import { DagensJokeComponent } from './jokes/components/dagens-joke/dagens-joke.component';
import { CarsListingComponent } from './cars/components/cars-listing/cars-listing.component';
import { FossilBilerComponent } from './fossil/components/fossil-biler/fossil-biler.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NewCardataComponent } from './fossil/components/dialog/new-cardata/new-cardata.component';
import { MatDialogModule, MatDialog, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MorsePipePipe } from './morse-pipe.pipe';
import { TextPipe } from './text.pipe';
import { PipeShowcaseComponent } from './pipes/components/pipe-showcase/pipe-showcase.component';
import { SlowtypePipe } from './pipes/pipes/slowtype.pipe';
import { CarLigstingDetailComponent } from './car-ligsting-detail/car-ligsting-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SideCammeratComponent,
    FirkanterDisplayComponent,
    BindingsExamplesComponent,
    ObservableEnvironmentComponent,
    DagensJokeComponent,
    CarsListingComponent,
    FossilBilerComponent,
    NewCardataComponent,
    MorsePipePipe,
    TextPipe,
    PipeShowcaseComponent,
    SlowtypePipe,
    CarLigstingDetailComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule    
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
