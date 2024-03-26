import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseTutorComponent } from './house-tutor.component';

describe('HouseTutorComponent', () => {
  let component: HouseTutorComponent;
  let fixture: ComponentFixture<HouseTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseTutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
