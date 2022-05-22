import { createReducer, on, ActionReducer, MetaReducer } from '@ngrx/store';
import { createTodo, deleteTodo, getTodos, editTodo } from './actions';

import { Todo, TodoStatus } from 'src/models/todo';
import { TodoServices } from 'src/services/todoServices';


export interface AppState {
    todos: Array<Todo>
}
export const initState : AppState = {
    todos: []
};

const service = new TodoServices;

export const todoReducer = createReducer(initState,
    on(createTodo, (state, { todoName }) => {
        
        var newTodo = {
            id: Date.now().toString(),
            name: todoName,
            state: TodoStatus.DOING
        } as Todo;

        var todos = [...state.todos];

        todos.push(newTodo);
        service.updateTodos(todos);

        return {...state, todos: todos};
    }),
    on(deleteTodo, (state, { todoId }) => {
        var todos = state.todos.filter(todo => todo.id !== todoId);
        service.updateTodos(todos);
        return {...state, todos: todos };
    }),
    on(getTodos, (state, { todos })=>{
        return {...state, todos: todos};
    }),
    on(editTodo, (state, { todoId, todoName, todoState }) => {
        var todos = state.todos.map(todo => {
            if (todo.id === todoId)
                return {...todo, 
                    name: todoName, 
                    status: todoState
                };
            return todo;
        });
        service.updateTodos(todos);
        return {...state, todos: todos};
    }));
