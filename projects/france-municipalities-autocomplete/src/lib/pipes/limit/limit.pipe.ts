import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit'
})
export class LimitPipe implements PipeTransform {

  transform(array: Array<any>, limit: number):  Array<any> {
    return array.slice(0, limit);
  }

}
