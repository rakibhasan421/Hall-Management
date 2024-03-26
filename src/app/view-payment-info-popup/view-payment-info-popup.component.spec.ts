import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaymentInfoPopupComponent } from './view-payment-info-popup.component';

describe('ViewPaymentInfoPopupComponent', () => {
  let component: ViewPaymentInfoPopupComponent;
  let fixture: ComponentFixture<ViewPaymentInfoPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPaymentInfoPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPaymentInfoPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
