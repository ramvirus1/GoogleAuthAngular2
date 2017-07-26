import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginModule} from './Modules/Login/login.module';
import {DashboardModule} from './Modules/Dashboard/dashboard.module';

const routes: Routes = [
   { path: '', pathMatch: 'full', redirectTo:'Login' },
   { path: 'Login', component: LoginModule },
   { path: 'Dashboard',component: DashboardModule,data:[{userdetails:{}}]}
];

@NgModule({
   imports: [RouterModule.forRoot(routes)],
   exports: [RouterModule],
})
export class AppRoutingModule { }
 
export const routingComponents = [LoginModule, DashboardModule];