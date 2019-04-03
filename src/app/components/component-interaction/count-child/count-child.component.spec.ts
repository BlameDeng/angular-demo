import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountChildComponent } from './count-child.component';

describe('CountChildComponent', () => {
  let component: CountChildComponent;
  let fixture: ComponentFixture<CountChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
