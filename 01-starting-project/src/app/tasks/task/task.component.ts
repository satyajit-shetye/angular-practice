import { Component, input, output } from '@angular/core';
import { ITask } from '../../model';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  task = input.required<ITask>();
  complete = output<string>();

  onCompleteTask(): void {
    this.complete.emit(this.task().id);
  }
}
