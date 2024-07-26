import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";
import { IUser } from './model';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUser?: IUser;

  onSelectUser(id: string): void {
    console.log(`Select user id ${id}`);
    this.selectedUser = this.users.find(user => user.id === id);
  }
}
