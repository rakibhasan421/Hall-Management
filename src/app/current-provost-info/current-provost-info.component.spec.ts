import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentProvostInfoComponent } from './current-provost-info.component';

describe('CurrentProvostInfoComponent', () => {
  let component: CurrentProvostInfoComponent;
  let fixture: ComponentFixture<CurrentProvostInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentProvostInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentProvostInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
