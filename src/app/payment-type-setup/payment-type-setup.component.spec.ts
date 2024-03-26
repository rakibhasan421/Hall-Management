import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTypeSetupComponent } from './payment-type-setup.component';

describe('PaymentTypeSetupComponent', () => {
  let component: PaymentTypeSetupComponent;
  let fixture: ComponentFixture<PaymentTypeSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentTypeSetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTypeSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
