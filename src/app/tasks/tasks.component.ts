import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { type NewTasksData } from '../user/user.model';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TasksService } from '../services/tasks.service';


@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {

  /* Outputting user specific tasks */
  @Input({required : true}) userId!:string;
  @Input({required : true}) name!:string;

  constructor(private taskService : TasksService){}

  //tasks = DUMM_TASKS;
  isAddTasks = false;
  isCancel = false;


  get selectedUserTasks(){
    console.log(this.userId);
    return this.taskService.getUserTasks(this.userId);
  }

  onStartAddtask(){
    this.isAddTasks = true;
  }

  onCloseAddTask(){
    this.isAddTasks = false;
  }

}
