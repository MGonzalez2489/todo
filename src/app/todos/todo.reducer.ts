import { createReducer, on } from '@ngrx/store';
import { Todo } from './models';
import {
  toggle,
  crear,
  borrar,
  actualizar,
  toggleTodos,
  borrarCompletados,
} from './todo.actions';

export const initialState: Todo[] = [new Todo('salvar al mundo')];

const _todoReducer = createReducer(
  initialState,
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),
  on(toggle, (state, { id }) => {
    return state.map((todo: Todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completado: !todo.completado,
        };
      } else {
        return todo;
      }
    });
  }),
  on(toggleTodos, (state) => {
    return state.map((todo: Todo) => {
      return {
        ...todo,
        completado: !todo.completado,
      };
    });
  }),

  on(borrar, (state, { id }) => {
    return state.filter((item) => item.id !== id);
  }),
  on(borrarCompletados, (state) => {
    return state.filter((item) => item.completado == false);
  }),

  on(actualizar, (state, { id, texto }) => {
    return state.map((todo: Todo) => {
      if (todo.id == id) {
        return {
          ...todo,
          texto: texto,
        };
      } else {
        return todo;
      }
    });
  })
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}
