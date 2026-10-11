import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { CounterService } from '../core/services/counter.service';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminUsersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  providers: [
    CounterService
  ]
})
export class AdminModule { }
