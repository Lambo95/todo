import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componentPage/nav/nav.component';
import { CompletatiPage } from './page/completati/completati.page';
import { TodosPage } from './page/todos/todos.page';
import { AddTodoComponent } from './page/todos/add-todo/add-todo.component';
import { TodoListComponent } from './page/todos/todo-list/todo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CompletatiPage,
    TodosPage,
    NavComponent,
    AddTodoComponent,
    TodoListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
