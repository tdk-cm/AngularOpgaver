import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FossilBilerComponent } from './fossil-biler.component';

describe('FossilBilerComponent', () => {
  let component: FossilBilerComponent;
  let fixture: ComponentFixture<FossilBilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FossilBilerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FossilBilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
