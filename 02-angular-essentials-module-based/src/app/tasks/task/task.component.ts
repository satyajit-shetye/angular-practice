import { Component, inject, input } from '@angular/core';
import { ITask } from '../../model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task',
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
