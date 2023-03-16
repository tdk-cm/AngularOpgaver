import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCardataComponent } from './new-cardata.component';

describe('NewCardataComponent', () => {
  let component: NewCardataComponent;
  let fixture: ComponentFixture<NewCardataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCardataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCardataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
