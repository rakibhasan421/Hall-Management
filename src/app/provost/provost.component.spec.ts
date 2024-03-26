import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvostComponent } from './provost.component';

describe('ProvostComponent', () => {
  let component: ProvostComponent;
  let fixture: ComponentFixture<ProvostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProvostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
