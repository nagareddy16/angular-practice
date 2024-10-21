import { Injectable } from '@angular/core';
import { type NewTasksData } from '../user/user.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor() { 
    const tasks = localStorage.getItem('tasks');

    if(tasks){
      this.tasks = JSON.parse(tasks);
    }
  }

  private tasks = [
    {
      id: "t1",
      userId: "u1",
      title: "Master Angular", 
      summary: "Learn all the basics & advance features of angular & how to apply them.",
      dueDate : "2025-12-31"
    },
    {
      id: "t2",
      userId: "u2",
      title: "Master Nodejs",
      summary: "Learn all the basics & advance features of nodejs & how to apply them.",
      dueDate : "2025-10-15"
    },
    {
      id: "t3",
      userId: "u3",
      title: "Master spring-boot",
      summary: "Learn all the basics & advance features of spring-boot & how to apply them.",
      dueDate : "2025-10-15"
    },
    {
      id: "t4",
      userId: "u3",
      title: "Master Reactjs",
      summary: "Learn all the basics & advance features of Reactjs & how to apply them.",
      dueDate : "2025-10-15"
    },
  ]


 /*  to get the usertask based on the userId */
  getUserTasks(userId : string){
    return this.tasks.filter((task) => task.userId === userId);
  }

  addUserTasks(taskData : NewTasksData, userId : string){
    this.tasks.push({
      id : new Date().getTime().toString(),
      userId : userId,
      title : taskData.title,
      summary : taskData.summary,
      dueDate : taskData.date
    });
    this.saveTask();
  }

  removeTasks(id : string){
    this.tasks =  this.tasks.filter((task) => task.id !== id);
    this.saveTask();
  }

  private saveTask(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
