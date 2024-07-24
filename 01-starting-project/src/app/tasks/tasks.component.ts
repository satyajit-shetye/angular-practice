import { Component, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { INewTask, ITask } from '../model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TASKS } from '../dummy-tasks';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  name = input.required<string>();
  id = input.required<string>();
  isAddNewTask: boolean = false;

  constructor(private taskService: TaskService) {
  }

  get selectedUserTasks(): ITask[] {
    return this.taskService.getSelectedUserTasks(this.id());
  }

  completeTask(taskId: string): void {
    this.taskService.completeTask(taskId);
  }

  onAddTask(): void {
    this.isAddNewTask = true;
  }

  onClosePopup() {
    this.isAddNewTask = false;
  }
}
