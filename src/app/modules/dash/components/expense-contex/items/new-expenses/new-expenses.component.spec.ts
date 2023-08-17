import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExpensesComponent } from './new-expenses.component';

describe('NewExpensesComponent', () => {
  let component: NewExpensesComponent;
  let fixture: ComponentFixture<NewExpensesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewExpensesComponent]
    });
    fixture = TestBed.createComponent(NewExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
