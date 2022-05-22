import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { todoReducer } from 'src/store/reducers';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list-item/todo-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({appState: todoReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
