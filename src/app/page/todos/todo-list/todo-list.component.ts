import { Component, OnInit } from '@angular/core';
import { TodoClass } from 'src/app/todo-class';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoItem = new TodoClass();
  todosArray: TodoClass[] = [];

  constructor(private tservice: TodosService) {}

  ngOnInit(): void {
    this.todosArray = this.tservice.todos;
  }

  checkTodo(i: number) {
    let todoItems = this.todosArray.splice(i, 1);
    this.todoItem = todoItems[0];
    console.log(this.todoItem);
    this.todoItem.completed = true;
    this.tservice.checkTodo(this.todoItem);
    this.todoItem = new TodoClass();
  }
}
