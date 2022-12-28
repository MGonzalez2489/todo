import { Pipe, PipeTransform } from '@angular/core';
import { filtrosValidos } from '../filtro/filtro.actions';
import { Todo } from './models';

@Pipe({
  name: 'filtroPipe',
})
export class FiltroPipePipe implements PipeTransform {
  transform(value: Todo[], filtro: filtrosValidos): Todo[] {
    switch (filtro) {
      case 'todos':
        return value;
      case 'completados':
        return value.filter((f) => f.completado == true);
      case 'pendientes':
        return value.filter((f) => f.completado == false);
      default:
        return value;
    }
  }
}
