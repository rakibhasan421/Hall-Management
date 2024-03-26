import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInfoSetupComponent } from './payment-info-setup.component';

describe('PaymentInfoSetupComponent', () => {
  let component: PaymentInfoSetupComponent;
  let fixture: ComponentFixture<PaymentInfoSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentInfoSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentInfoSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
