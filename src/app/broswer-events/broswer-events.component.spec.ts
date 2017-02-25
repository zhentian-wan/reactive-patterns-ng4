import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BroswerEventsComponent } from './broswer-events.component';

describe('BroswerEventsComponent', () => {
  let component: BroswerEventsComponent;
  let fixture: ComponentFixture<BroswerEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BroswerEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BroswerEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
