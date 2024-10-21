/* using the type alias 
type User = {
  id : string;
  name : string;
  avatar : string;
}*/

/* using the interface */
export interface User  {
    id : string;
    name : string;
    avatar : string;
  }

export interface NewTasksData{
  title:string;
  summary:string; 
  date:string;
}  