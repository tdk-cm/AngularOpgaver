import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DagensJokeComponent } from './dagens-joke.component';

describe('DagensJokeComponent', () => {
  let component: DagensJokeComponent;
  let fixture: ComponentFixture<DagensJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DagensJokeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DagensJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
