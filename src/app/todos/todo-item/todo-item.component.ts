import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent implements OnInit {
  @Input()
  item: Todo;

  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  chkComplet: FormControl;
  txtInput: FormControl;
  editing: boolean;
  ngOnInit(): void {
    this.chkComplet = new FormControl(this.item.completado);
    this.txtInput = new FormControl(this.item.texto);

    this.chkComplet.valueChanges.subscribe((valor) => {
      this.store.dispatch(actions.toggle({ id: this.item.id }));
    });
  }

  constructor(private store: Store<AppState>) {}
  editar(): void {
    this.editing = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
    }, 1);
  }
  terminarEdicion(): void {
    this.editing = false;
    if (this.txtInput.invalid || this.txtInput.value === this.item.texto) {
      return;
    }
    this.store.dispatch(
      actions.actualizar({ id: this.item.id, texto: this.txtInput.value })
    );
  }
  delete(): void {
    this.store.dispatch(actions.borrar({ id: this.item.id }));
  }
}
