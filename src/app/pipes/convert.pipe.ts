import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, args: any): any {
    if(args == 'convertHeight') {
      return Number(value)/100;
    } if(args == 'convertGender'){
      return value == 'M' ? 'Male': 'Female';
    }
  }

}
