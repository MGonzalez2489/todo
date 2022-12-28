import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';
import { Todo } from '../models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todos: Todo[] = [];
  filtro: filtrosValidos;
  constructor(private store: Store<AppState>) {
    this.store.subscribe(({ todos, filtro }) => {
      this.todos = todos;
      this.filtro = filtro;
    });
  }
}
