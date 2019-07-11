import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtOfDayComponent } from './thought-of-day.component';

describe('ThoughtOfDayComponent', () => {
  let component: ThoughtOfDayComponent;
  let fixture: ComponentFixture<ThoughtOfDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThoughtOfDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoughtOfDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
