import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTypeInfoViewComponent } from './payment-type-info-view.component';

describe('PaymentTypeInfoViewComponent', () => {
  let component: PaymentTypeInfoViewComponent;
  let fixture: ComponentFixture<PaymentTypeInfoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentTypeInfoViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTypeInfoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
