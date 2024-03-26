import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellComepageComponent } from './well-comepage.component';

describe('WellComepageComponent', () => {
  let component: WellComepageComponent;
  let fixture: ComponentFixture<WellComepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellComepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellComepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
