import { Component, computed, input, output, signal } from '@angular/core';

import { DUMMY_USERS } from '../dummy-users';
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {

  // 1. Basic

  // selectedUser: { id: string; name: string; avatar: string } =
  //   DUMMY_USERS[randomIndex];

  // get imagePath(): string {
  //   return 'assets/users/' + this.selectedUser.avatar;
  // }

  // onSelectUser(): void {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser = DUMMY_USERS[randomIndex];
  // }


  // 2. Using Signal

  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // onSelectUser(): void {
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

  // 3.Using input

  avatar = input.required();
  name = input.required<string>();
  id = input.required<string>();

  selectUser = output<string>();

  imagePath = computed(() => 'assets/users/' + this.avatar());

  onSelectUser() : void {
    this.selectUser.emit(this.id());
  }
}
