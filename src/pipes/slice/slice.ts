import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the SlicePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'slice',
})
export class SlicePipe implements PipeTransform {
  /**
   * slice text
   */
  transform(value: string, ...args) {
    return value.substr(args[0], args[1]);
  }
}
