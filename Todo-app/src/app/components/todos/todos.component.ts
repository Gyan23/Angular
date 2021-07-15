import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo'; 

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

 title = "Todo App";
 
 inputTodo:string="";

  todos:Todo[] | undefined;

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
      content:"first",
      completed:false
      },
      {
        content:"second",
        completed:false
      }
    ]
  }

deleteTodo(id:number){
  this.todos = this.todos?.filter((v,i)=>i !== id);
}
addTodo(){
  if(this.inputTodo){
  this.todos?.push({
    content:this.inputTodo,
    completed:false
  });
}
  this.inputTodo = "";
}

}
