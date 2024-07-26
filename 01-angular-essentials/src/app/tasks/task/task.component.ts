import { Component, inject, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ITask } from '../../model';
import { CardComponent } from "../../shared/card/card.component";
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  task = input.required<ITask>();
  taskService = inject(TaskService);

  onCompleteTask(): void {
    this.taskService.completeTask(this.task().id);
  }
}
