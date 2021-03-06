import { Component, Output, EventEmitter } from '@angular/core';
import { PaymentProvider } from '../../providers/payment/payment';
/**
 * Generated class for the CoinComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'coin',
  templateUrl: 'coin.html'
})
export class CoinComponent {
  subscribe: any;
  balanceValue: number;
  @Output() balanceChange: EventEmitter < any > = new EventEmitter < any > ();
  set balance(val: number) {
    if (this.balanceValue === val) return;
    this.balanceValue = val || 0;
    this.balanceChange.emit(this.balanceValue);
  }
  constructor(
    private paymentPro: PaymentProvider
  ) {
    console.log('Hello CoinComponent Component');
    this.paymentPro.getLocalBalance().then(res => {
      res === undefined && this.paymentPro.balance();
      this.balance = res;
    });
  }

  ngAfterViewInit() {
    this.subscribe = this.paymentPro.balance$.subscribe((res) => {
      this.balance = res;
    });
  }

  ngOnDestory() {
    this.subscribe.unsubscribe();
  }

}
