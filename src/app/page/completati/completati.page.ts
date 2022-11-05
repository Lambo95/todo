import { Component, OnInit } from '@angular/core';
import { TodoClass } from 'src/app/todo-class';
import { TodosService } from 'src/app/todos.service';

@Component({
  selector: 'app-completati',
  templateUrl: './completati.page.html',
  styleUrls: ['./completati.page.scss'],
})
export class CompletatiPage implements OnInit {
  todoCheck: TodoClass[] = [];

  constructor(private tService: TodosService) {}

  ngOnInit(): void {
    this.todoCheck = this.tService.todosChecked;
  }

  deleteTodo(i: number) {
    this.tService.deleteTodo(i);
  }
}
