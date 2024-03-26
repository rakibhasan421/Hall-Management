import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseTutorListComponent } from './house-tutor-list.component';

describe('HouseTutorListComponent', () => {
  let component: HouseTutorListComponent;
  let fixture: ComponentFixture<HouseTutorListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseTutorListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseTutorListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
