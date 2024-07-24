import { Component, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ITask } from '../../model';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
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
