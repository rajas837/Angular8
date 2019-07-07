import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'customDatePipe'
})
export class CustomDatePipePipe implements PipeTransform {

  transform(value: any, format: any, order: any): any {
    if(format == 'from now') {
      if(order == 1)
        return value = moment('20111031', 'YYYYMMDD').fromNow();
      if(order == 2)
        return value = moment('20120322', 'YYYYMMDD').fromNow();
      if(order == 3)
        return value = moment().startOf('day').fromNow();
      if(order == 4)
        return value = moment().endOf('day').fromNow();
      if(order == 5)
        return value = moment().startOf('hours').fromNow();
    } else 
    {
      return value = moment().format(format);
    }
  }
}