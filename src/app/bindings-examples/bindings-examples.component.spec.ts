import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingsExamplesComponent } from './bindings-examples.component';

describe('BindingsExamplesComponent', () => {
  let component: BindingsExamplesComponent;
  let fixture: ComponentFixture<BindingsExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingsExamplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindingsExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
