import { Component } from '@angular/core';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';
import { ServerStatusComponent } from './server-status/server-status.component';
import { TrafficComponent } from './traffic/traffic.component';
import { SupportTicketsComponent } from './support-tickets/support-tickets.component';
import { IDashboardItems } from '../app.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DashboardItemComponent,
    ServerStatusComponent,
    TrafficComponent,
    SupportTicketsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  dashboardItems: IDashboardItems[] = [
    {
      image: {
        src: 'status.png',
        alt: 'A signal image',
      },
      title: 'Server Status',
    },
    {
      image: {
        src: 'globe.png',
        alt: 'A globe image',
      },
      title: 'Traffic',
    },
    {
      image: {
        src: 'list.png',
        alt: 'A list image',
      },
      title: 'Support Tickets',
    },
  ];
}
