import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideCammeratComponent } from './side-cammerat.component';

describe('SideCammeratComponent', () => {
  let component: SideCammeratComponent;
  let fixture: ComponentFixture<SideCammeratComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideCammeratComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideCammeratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
