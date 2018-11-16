import { Pipe, PipeTransform } from '@angular/core';
import { strictEqual } from 'assert';

@Pipe({
  name: 'removeSpaces'
})
export class RemoveSpacesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace("-", " ");
  }
}
