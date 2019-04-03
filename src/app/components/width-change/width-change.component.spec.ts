import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidthChangeComponent } from './width-change.component';

describe('WidthChangeComponent', () => {
  let component: WidthChangeComponent;
  let fixture: ComponentFixture<WidthChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidthChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidthChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
