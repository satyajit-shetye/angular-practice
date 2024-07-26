import { Component, input } from '@angular/core';
import { ITask } from '../model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
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

  onAddTask(): void {
    this.isAddNewTask = true;
  }

  onClosePopup() {
    this.isAddNewTask = false;
  }
}