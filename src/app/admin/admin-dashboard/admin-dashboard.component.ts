import { Component, inject } from '@angular/core';
import { CounterService } from 'src/app/core/services/counter.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  public counterService = inject(CounterService);
}
