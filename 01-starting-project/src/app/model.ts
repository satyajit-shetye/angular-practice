export interface IUser {
  id: string;
  name: string;
  avatar: string;
}

export interface ITask {
  id: string;
  userId: string;
  title: string;
  summary: string;
  dueDate: string;
}
