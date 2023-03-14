import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableEnvironmentComponent } from './observable-environment.component';

describe('ObservableEnvironmentComponent', () => {
  let component: ObservableEnvironmentComponent;
  let fixture: ComponentFixture<ObservableEnvironmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableEnvironmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableEnvironmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
