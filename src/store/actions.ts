import { createAction, props } from '@ngrx/store';
import { Todo } from '../models/todo';

export const CREATE_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const GET_TODOS = 'GET_TODOS';

export const createTodo = createAction(CREATE_TODO, props<{ todoName: string }>());
export const deleteTodo = createAction(DELETE_TODO, props<{ todoId: string }>());
export const getTodos = createAction(GET_TODOS, props<{ todos: Array<Todo> }>());
export const editTodo = createAction(EDIT_TODO, props<{todoId: string, todoName: string, todoState: string }>());
