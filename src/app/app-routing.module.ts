import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./core/not-found/not-found.component";

const routes: Routes = [
  {path:'',redirectTo:'security/login',pathMatch:'full'},
  { path: 'security', loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule) },
  { path: 'dash', loadChildren: () => import('./modules/dash/dash.module').then(m => m.DashModule) },
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
