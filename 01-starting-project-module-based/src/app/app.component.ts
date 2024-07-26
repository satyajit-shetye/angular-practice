import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';
import { IUser } from './model';


@Component({
  selector: 'app-root',
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
