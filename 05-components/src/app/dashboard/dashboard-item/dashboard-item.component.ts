import { Component, input } from '@angular/core';
import { IImage } from '../../app.model';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css',
})
export class DashboardItemComponent {
  image = input.required<IImage>();
  title = input.required<string>();
}
