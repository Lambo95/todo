import { Component, OnInit } from '@angular/core';
import { TodoClass } from 'src/app/todo-class';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {
  todoEl = new TodoClass();
  lengthArray: boolean = true;
  constructor(private tService: TodosService) {}

  ngOnInit(): void {}

  // verifyLength() {
  //   if (this.todosArray.length != 0 && this.todosArray.length > 0) {
  //   }
  // }
  createTodo(arg: string) {
    this.todoEl.title = arg;
    this.tService.addTodo(this.todoEl);
    this.todoEl = new TodoClass();
  }
}
