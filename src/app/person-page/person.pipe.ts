import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'person'
})
export class PersonPipe implements PipeTransform {

  transform(value: string): any {
    if (!value) {
      return null;
    }
    else {
      return value.substr(0, 960) + '...';
    }
  }

}
