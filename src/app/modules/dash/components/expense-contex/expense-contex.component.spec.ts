import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseContexComponent } from './expense-contex.component';

describe('ExpenseContexComponent', () => {
  let component: ExpenseContexComponent;
  let fixture: ComponentFixture<ExpenseContexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpenseContexComponent]
    });
    fixture = TestBed.createComponent(ExpenseContexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
