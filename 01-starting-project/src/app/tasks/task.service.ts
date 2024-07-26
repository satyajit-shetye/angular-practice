import { Injectable } from '@angular/core';
import { INewTask, ITask } from '../model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: ITask[] = [];

  constructor() { 
    const tasks = localStorage.getItem('tasks');
    if(tasks) {
      this.tasks = JSON.parse(tasks);
    }
  }

  getSelectedUserTasks(userId: string): ITask[] {
    return this.tasks.filter((task) => task.userId === userId);
  }

  completeTask(taskId: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
    this.saveTasks();
  }

  addTask(newTask: INewTask, userId: string): void {
    this.tasks.unshift({
      id: new Date().getTime().toString(),
      userId: userId,
      title: newTask.title,
      summary: newTask.summary,
      dueDate: newTask.dueDate,
    });
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
