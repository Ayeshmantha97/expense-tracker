import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryContexComponent } from './salary-contex.component';

describe('SalaryContexComponent', () => {
  let component: SalaryContexComponent;
  let fixture: ComponentFixture<SalaryContexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalaryContexComponent]
    });
    fixture = TestBed.createComponent(SalaryContexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
