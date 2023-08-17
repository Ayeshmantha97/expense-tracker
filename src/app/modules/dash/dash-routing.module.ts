import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash.component';
import {DashboardContexComponent} from "./components/dashboard-contex/dashboard-contex.component";
import {DefaultComponent} from "./components/default/default.component";
import {ExpenseContexComponent} from "./components/expense-contex/expense-contex.component";
import {LoanContexComponent} from "./components/loan-contex/loan-contex.component";
import {SalaryContexComponent} from "./components/salary-contex/salary-contex.component";
import {NewExpensesComponent} from "./components/expense-contex/items/new-expenses/new-expenses.component";

const routes: Routes = [{ path: '', component: DashComponent,children:[
        {path:'',redirectTo:'/dashboard/process/home',pathMatch:"full"},
        {path:'process',component:DashboardContexComponent,children:[
                {path:'home',component:DefaultComponent},
                {path:'expenses',component:ExpenseContexComponent,children:[
                        {path:'new',component:NewExpensesComponent}
                    ]},
                {path:'loan',component:LoanContexComponent},
                {path:'salary',component:SalaryContexComponent}
            ]}

  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashRoutingModule { }
