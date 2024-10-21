import { CardComponent } from './shared/card/card.component';
import { TaskComponent } from './tasks/task/task.component';
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { TasksComponent } from "./tasks/tasks.component";
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from "./header/header.component";
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';



@NgModule({
  declarations : [AppComponent,UserComponent, HeaderComponent],
  bootstrap: [AppComponent],
  imports : [BrowserModule, FormsModule, SharedModule, TasksModule]
})

export class AppModule{}