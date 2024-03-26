import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPaymentInfoPopupComponent } from './add-payment-info-popup.component';

describe('AddPaymentInfoPopupComponent', () => {
  let component: AddPaymentInfoPopupComponent;
  let fixture: ComponentFixture<AddPaymentInfoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPaymentInfoPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPaymentInfoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
