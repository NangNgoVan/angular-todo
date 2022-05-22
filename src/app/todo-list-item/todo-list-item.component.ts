import { Component, OnInit, Input } from '@angular/core';

import { Store } from '@ngrx/store';
import { deleteTodo, editTodo } from '../../store/actions';

import { Todo, TodoStatus } from '../../models/todo';
import { todoReducer } from 'src/store/reducers';

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListComponent implements OnInit {
  
  @Input() todo : any;

  editingMode: boolean = false;

  constructor(private store: Store) { 

  }

  ngOnInit(): void {
  }

  onCheckboxChange(event: any) {
    var status = event.target.checked ? TodoStatus.COMPLETED:TodoStatus.DOING;
    this.store.dispatch(editTodo({todoId: this.todo.id, 
      todoName: this.todo.name, 
      todoState: status
    }));
  }

  onSaveTodoName(todoName: string) {
    if (todoName === '') return;
    this.editingMode = false;
    this.store.dispatch(editTodo({todoId: this.todo.id, 
      todoName: todoName, 
      todoState: this.todo.state
    }));
  }

  onCancelEditing() {
    this.editingMode = false;
  }

  onDeleteTodo(todoId: string) {
    this.store.dispatch(deleteTodo({todoId: todoId}));
  }

}
