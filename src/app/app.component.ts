import { Component } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './components/dashboard/dashboard.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SharedModule,
    DashboardModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'lib';
}
