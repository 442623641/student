import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PercentPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'percent',
})
export class PercentPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: number) {
    let val: any = value ? Number(value) : 0;
    val = (val * 100).toFixed(2).replace('.00', '');
    let vals = val.split('.');
    if (vals[1]) {
      vals[1] = vals[1].substr(1, 1) == '0' ? val[1].substr(0, 1) : val[1];
      return `${vals[0]}.${vals[1]}%`;
    } else {
      return `${val}%`;
    }
  }
}
