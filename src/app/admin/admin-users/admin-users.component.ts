import { Component, inject } from '@angular/core';
import { CounterService } from 'src/app/core/services/counter.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss']
})
export class AdminUsersComponent {

  public counterService = inject(CounterService);    
}
