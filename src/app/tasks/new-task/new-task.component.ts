import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { type NewTasksData } from '../../user/user.model';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input({required : true}) userId!:string;
  @Output() close = new EventEmitter<void>();

  private taskService = inject(TasksService);


  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  onClose(){
    this.close.emit();
  }

  onSubmit(){
    this.taskService.addUserTasks(
      {
      title : this.enteredTitle,
      summary : this.enteredSummary,
      date : this.enteredDate
     },
      this.userId
    );
    this.close.emit();
  }
  
}
