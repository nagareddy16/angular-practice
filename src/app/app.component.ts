import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy.users';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { TasksComponent } from './tasks/tasks.component';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: false,

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-practice';

  users = DUMMY_USERS;
  /* outputting conditional content */
  selectedUserId?: string;
  
  get selectedUser(){
    return this.users.find( (user) => 
        user.id === this.selectedUserId
    );
  }

  onSelect(id : string){
    this.selectedUserId = id;
  }
  
}
