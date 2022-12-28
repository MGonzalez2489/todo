import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { filtrosValidos, setFiltro } from 'src/app/filtro/filtro.actions';
import { Todo } from '../models';
import { borrarCompletados } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss'],
})
export class TodoFooterComponent implements OnInit {
  todoCompletados: Todo[] = [];
  filtro: filtrosValidos = <filtrosValidos>'todos';
  constructor(private store: Store<AppState>) {
    this.store.select('todos').subscribe((todos) => {
      this.todoCompletados = todos.filter((f) => f.completado == true);
    });
  }
  ngOnInit(): void {}

  setFilter(value: filtrosValidos): void {
    this.filtro = value;
    this.store.dispatch(setFiltro({ filtro: value }));
  }
  borrar(): void {
    this.store.dispatch(borrarCompletados());
  }
}
