import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'youTypeIFix',
})
export class TodoNameFormaterPipe implements PipeTransform {
  transform(value: string): string {
    if (typeof value == 'string') {
      let first = value.charAt(0).toUpperCase();
      return first.concat(value.slice(1).toLowerCase());
    } else {
      return value;
    }
  }
}
