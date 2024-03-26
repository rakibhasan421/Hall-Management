import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHallBodyPopupComponent } from './add-hall-body-popup.component';

describe('AddHallBodyPopupComponent', () => {
  let component: AddHallBodyPopupComponent;
  let fixture: ComponentFixture<AddHallBodyPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHallBodyPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHallBodyPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
