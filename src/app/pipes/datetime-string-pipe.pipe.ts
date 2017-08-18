import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datetimeString'
})
export class DatetimeStringPipePipe implements PipeTransform {

  transform(timestamp: string): any {
    return new Date(timestamp).toString();
  }

}
