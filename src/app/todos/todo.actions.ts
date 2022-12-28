import { createAction, props } from '@ngrx/store';

export const crear = createAction(
  '[TODO] Crear todo',
  props<{ texto: string }>()
);

export const toggle = createAction(
  '[TODO] Toggle todo',
  props<{ id: number }>()
);
export const toggleTodos = createAction('[TODO] Toggle todos todo');

export const borrar = createAction(
  '[TODO] Delete todo',
  props<{ id: number }>()
);
export const borrarCompletados = createAction('[TODO] Delete todo');

export const actualizar = createAction(
  '[TODO] Actualizar todo',
  props<{ id: number; texto: string }>()
);
