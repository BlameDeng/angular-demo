import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerChildComponent } from './timer-child.component';

describe('TimerChildComponent', () => {
  let component: TimerChildComponent;
  let fixture: ComponentFixture<TimerChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
