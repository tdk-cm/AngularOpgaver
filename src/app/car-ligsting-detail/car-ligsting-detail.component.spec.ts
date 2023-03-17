import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarLigstingDetailComponent } from './car-ligsting-detail.component';

describe('CarLigstingDetailComponent', () => {
  let component: CarLigstingDetailComponent;
  let fixture: ComponentFixture<CarLigstingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarLigstingDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarLigstingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
