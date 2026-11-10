import { Component, computed, Input, signal } from '@angular/core';

type MenuItem = {
    icon: string;
    label: string;
    route?: string;
}

@Component({
  selector: 'app-custom-side-nav',
  templateUrl: './custom-side-nav.component.html',
  styleUrls: ['./custom-side-nav.component.scss']
})
export class CustomSideNavComponent {

  sideNaveCollapsed = signal(false);

  @Input() set collapsed(val: boolean) {
    this.sideNaveCollapsed.set(val);
  }

  menuItems = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'داشبورد',
      route: 'dashboard'
    },
    {
      icon: 'video-library',
      label: 'محتوا',
      route: 'content'
    },
    {
      icon: 'analytics',
      label: 'آمار',
      route: 'analitics'
    },
    {
      icon: 'comment',
      label: 'نظرات',
      route: 'comments'
    }
  ])

  profilePicSize = computed(() => this.sideNaveCollapsed() ? 32 : 100);
}
