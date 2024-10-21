import { TasksService } from './../../services/tasks.service';
import { Component, Input, inject } from '@angular/core';
import { Tasks } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  @Input({required : true}) task!:Tasks;
  private taskService = inject(TasksService);

  onComplete(){
    this.taskService.removeTasks(this.task.id);
  }
  
}
