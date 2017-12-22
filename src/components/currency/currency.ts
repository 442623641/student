import { Component, Input } from '@angular/core';

/**
 * Generated class for the CurrencyComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'currency',
  templateUrl: 'currency.html'
})
export class CurrencyComponent {
  integerDigits: string = '0';
  fractionDigits: string = '00';
  _value: any;
  @Input() set value(val: any) {
    val = Number(val);
    if (val >= 0 && this._value !== val) {
      this._value = val;
      let digits = val.toFixed(2).split('.');
      this.integerDigits = digits[0];
      this.fractionDigits = digits[1];
    }
  }
  constructor() {
    //console.log('Hello CurrencyComponent Component');
  }

}
