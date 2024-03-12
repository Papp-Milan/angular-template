import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { NavbarItem } from '../../models/navbar-item';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SharedModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  constructor(
    private router: Router
  ) { }

  title = 'Home';

  items: NavbarItem[] = [
    { routerLink: '/todos', icon: 'checklist', title: 'Todos' },
    { routerLink: '/settings', icon: 'settings', title: 'Settings' },
  ];

  goHome() {
    this.title = 'Home';
    this.router.navigate(['./']);
  }

  redirect(item: NavbarItem) {
    this.title = item.title;
    this.router.navigate([item.routerLink]);
  }
}
