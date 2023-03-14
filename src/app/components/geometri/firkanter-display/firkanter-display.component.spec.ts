import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirkanterDisplayComponent } from './firkanter-display.component';

describe('FirkanterDisplayComponent', () => {
  let component: FirkanterDisplayComponent;
  let fixture: ComponentFixture<FirkanterDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirkanterDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirkanterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
