import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHuseTutorPopupComponent } from './add-huse-tutor-popup.component';

describe('AddHuseTutorPopupComponent', () => {
  let component: AddHuseTutorPopupComponent;
  let fixture: ComponentFixture<AddHuseTutorPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddHuseTutorPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHuseTutorPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
