import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        TasksComponent,
        TaskComponent,
        NewTaskComponent,
    ],
    exports: [TasksComponent],
    imports: [CommonModule, SharedModule, FormsModule]
})
export class TaskModule {

}