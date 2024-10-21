import { SharedModule } from './../shared/shared.module';
import { FormsModule, NgModel } from "@angular/forms";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';


@NgModule({
    declarations : [TasksComponent, TaskComponent, NewTaskComponent],
    exports : [TasksComponent],
    imports : [FormsModule, CommonModule, SharedModule]
})

export class TasksModule {}