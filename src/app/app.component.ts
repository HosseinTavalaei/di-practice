import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'di-practice';

  collapsed = signal<boolean>(false);
  sidenavWidth = computed(() => this.collapsed() ? 64 : 250)

}
