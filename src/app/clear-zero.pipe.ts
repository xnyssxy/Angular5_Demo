import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clearZero'
})
export class ClearZeroPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
