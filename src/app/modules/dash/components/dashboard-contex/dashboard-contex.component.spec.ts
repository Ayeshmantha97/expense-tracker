import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardContexComponent } from './dashboard-contex.component';

describe('DashboardContexComponent', () => {
  let component: DashboardContexComponent;
  let fixture: ComponentFixture<DashboardContexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardContexComponent]
    });
    fixture = TestBed.createComponent(DashboardContexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
