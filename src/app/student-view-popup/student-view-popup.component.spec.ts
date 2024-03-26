import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewPopupComponent } from './student-view-popup.component';

describe('StudentViewPopupComponent', () => {
  let component: StudentViewPopupComponent;
  let fixture: ComponentFixture<StudentViewPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentViewPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentViewPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
