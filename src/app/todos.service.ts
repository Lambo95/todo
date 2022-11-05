import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { TodoClass } from './todo-class';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos: TodoClass[] = [
    // {
    //   id: 1,
    //   title: 'template',
    //   completed: false,
    // },
  ];

  todosChecked: TodoClass[] = [];

  constructor() {}

  addTodo(obj: Todo): void {
    this.todos.push(obj);
    console.log(this.todos);
  }

  checkTodo(obj: Todo): void {
    this.todosChecked.push(obj);
    console.log(this.todosChecked);
  }

  deleteTodo(id: number) {
    this.todosChecked.splice(id, 1);
  }
}
