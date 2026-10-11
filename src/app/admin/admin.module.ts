import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { CounterService } from '../core/services/counter.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

const MaterialModules = [MatButtonModule, MatDividerModule, MatIconModule];

@NgModule({
  declarations: [AdminDashboardComponent, AdminUsersComponent],
  imports: [CommonModule, AdminRoutingModule, ...MaterialModules],
  exports: [...MaterialModules],
  providers: [CounterService],
})
export class AdminModule {}
