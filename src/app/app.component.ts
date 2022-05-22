import { Component } from '@angular/core';
import { createSelector, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Todo, TodoStatus } from '../models/todo';
import { AppState } from '../store/reducers';
import { createTodo, getTodos } from '../store/actions';
import { TodoServices } from 'src/services/todoServices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-todo';
  todoName = '';
  todos$: Array<Todo> = [];

  constructor(private store: Store<{appState: AppState}>, private todoServices: TodoServices) {
    this.store.select('appState').subscribe(appState=>{
      this.todos$ = appState.todos;
    });

    todoServices.getTodosFromStorage().then(todos=>{
      this.store.dispatch(getTodos({todos: todos}));
    })
  }

  inputHandler(event: any) {
    if (this.todoName === '') return;

    this.store.dispatch(createTodo({todoName: this.todoName}));

    this.todoName = '';
  }
}
