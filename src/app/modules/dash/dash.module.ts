import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashRoutingModule } from './dash-routing.module';
import { DashComponent } from './dash.component';
import { DashboardContexComponent } from './components/dashboard-contex/dashboard-contex.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { DefaultComponent } from './components/default/default.component';
import { ExpenseContexComponent } from './components/expense-contex/expense-contex.component';
import { LoanContexComponent } from './components/loan-contex/loan-contex.component';
import { SalaryContexComponent } from './components/salary-contex/salary-contex.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import { NewExpensesComponent } from './components/expense-contex/items/new-expenses/new-expenses.component';


@NgModule({
  declarations: [
    DashComponent,
    DashboardContexComponent,
    DashboardHeaderComponent,
    DefaultComponent,
    ExpenseContexComponent,
    LoanContexComponent,
    SalaryContexComponent,
    NewExpensesComponent
  ],
    imports: [
        CommonModule,
        DashRoutingModule,
        MatToolbarModule,
        MatButtonModule
    ]
})
export class DashModule { }
