import { Injectable } from '@angular/core';

import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoServices {

  constructor() { }

  async getTodosFromStorage() : Promise<Array<Todo>> {
        var todos = [];
        var todosValue = localStorage.getItem('todos');
        if (todosValue) {
            todos = JSON.parse(todosValue);
        }
      return todos;
  }

  async updateTodos(todos: Array<Todo>) {
      localStorage.setItem('todos', 
        JSON.stringify(todos));
  }

}
