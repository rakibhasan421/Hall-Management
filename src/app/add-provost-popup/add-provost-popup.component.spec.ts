import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProvostPopupComponent } from './add-provost-popup.component';

describe('AddProvostPopupComponent', () => {
  let component: AddProvostPopupComponent;
  let fixture: ComponentFixture<AddProvostPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProvostPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProvostPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
