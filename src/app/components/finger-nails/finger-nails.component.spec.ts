import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FingerNailsComponent } from './finger-nails.component';

describe('FingerNailsComponent', () => {
  let component: FingerNailsComponent;
  let fixture: ComponentFixture<FingerNailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FingerNailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FingerNailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
