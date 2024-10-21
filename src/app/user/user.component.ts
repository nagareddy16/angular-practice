import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy.users';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  /* const randomNum = Math.floor(Math.random() * DUMMY_USERS.length); */
 
  // selectedUser = DUMMY_USERS[randomNum];

  /* using signals
  selectedUser = signal(DUMMY_USERS[randomNum]);
  imagePath = computed( () => {
    'public/users' + this.selectedUser().avatar;
  }) */

 /*  without signals
  get imagePath(){
    return 'public/users/'+this.selectedUser.avatar; 
  } */

    /* using the decorators 
    @Input({required : true}) id!:string;
    @Input({required : true}) avatar!: string;
    @Input({required : true}) name!: string;
    */

    /* incase of multiple calling values we can create a object and then initiate the values in it 
    @Input({required : true}) user!: {
      id : string;
      avatar : string;
      name : string;
    }
      */

    @Input({required : true}) user!:User;
    @Input({required : true}) selected!:boolean;
    @Output() select = new EventEmitter<string>();
    

    /* using signals inputs
    avatar = input.required<string>();
    name = input.required<String>(); 
    select = output<string>()*/

    get imagePath(){
      return 'assets/users/'+ this.user.avatar;
    }

  onSelectUser(){
    /* using signals
    const randomNum = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomNum]); */

   /*  without signals
    this.selectedUser = DUMMY_USERS[randomNum]; */

    this.select.emit(this.user.id);
  }
}
