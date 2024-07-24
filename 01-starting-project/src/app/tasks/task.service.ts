import { Injectable } from '@angular/core';
import { TASKS } from '../dummy-tasks';
import { INewTask, ITask } from '../model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: ITask[] = TASKS;

  constructor() { }

  getSelectedUserTasks(userId: string): ITask[] {
    return this.tasks.filter((task) => task.userId === userId);
  }

  completeTask(taskId: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  addTask(newTask: INewTask, userId: string): void {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    });
  }
}
