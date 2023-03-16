import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeShowcaseComponent } from './pipe-showcase.component';

describe('PipeShowcaseComponent', () => {
  let component: PipeShowcaseComponent;
  let fixture: ComponentFixture<PipeShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeShowcaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
