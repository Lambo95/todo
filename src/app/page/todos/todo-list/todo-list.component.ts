import { Component, OnInit } from '@angular/core';
import { TodoClass } from 'src/app/todo-class';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todoItems = new TodoClass();

  todosArray: any = [];

  constructor(private tservice: TodosService) {}

  ngOnInit(): void {
    this.todosArray = this.tservice.todos;
  }

  checkTodo(i: number) {
    this.todoItems = this.todosArray.splice(i, 1);
    this.todoItems.completed = true;
    this.tservice.checkTodo(this.todoItems);
    this.todoItems = new TodoClass();
  }
}
