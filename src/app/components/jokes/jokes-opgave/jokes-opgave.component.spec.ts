import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokesOpgaveComponent } from './jokes-opgave.component';

describe('JokesOpgaveComponent', () => {
  let component: JokesOpgaveComponent;
  let fixture: ComponentFixture<JokesOpgaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokesOpgaveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokesOpgaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
