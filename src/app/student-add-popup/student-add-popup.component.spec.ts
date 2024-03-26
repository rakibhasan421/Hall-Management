import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAddPopupComponent } from './student-add-popup.component';

describe('StudentAddPopupComponent', () => {
  let component: StudentAddPopupComponent;
  let fixture: ComponentFixture<StudentAddPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentAddPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentAddPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
