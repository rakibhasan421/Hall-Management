import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HallBodyComponent } from './hall-body.component';

describe('HallBodyComponent', () => {
  let component: HallBodyComponent;
  let fixture: ComponentFixture<HallBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HallBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HallBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
