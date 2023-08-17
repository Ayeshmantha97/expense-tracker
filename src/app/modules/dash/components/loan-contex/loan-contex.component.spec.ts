import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanContexComponent } from './loan-contex.component';

describe('LoanContexComponent', () => {
  let component: LoanContexComponent;
  let fixture: ComponentFixture<LoanContexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoanContexComponent]
    });
    fixture = TestBed.createComponent(LoanContexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
