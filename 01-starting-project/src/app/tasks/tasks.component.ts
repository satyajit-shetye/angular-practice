import { Component, input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { ITask } from '../model';
import { NewTaskComponent } from './new-task/new-task.component';
import { TASKS } from '../dummy-tasks';

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
  tasks: ITask[] = TASKS;
  isAddNewTask: boolean = false;

  get selectedUserTasks(): ITask[] {
    return this.tasks.filter((task) => task.userId === this.id());
  }

  completeTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  onAddTask(): void {
    this.isAddNewTask = true;
  }

  onCancelPopup() {
    this.isAddNewTask = false;
  }
}
