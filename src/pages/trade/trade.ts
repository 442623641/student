import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TradeProvider } from '../../providers/trade/trade';
import { IView } from '../../model/view';
@IonicPage()
@Component({
  selector: 'page-trade',
  templateUrl: 'trade.html',
})
export class TradePage {
  view: IView = { viewindex: 1, viewlength: 10 };
  tradeinfo: any[];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tradePro: TradeProvider) {}

  ngAfterViewInit() {
    this.tradePro.orderinfo(this.view).then(res => {
      console.log(res);
      if (!res || !res.length) return this.tradeinfo = null;
      this.tradeinfo = res;
    }).catch(ex => {
      this.tradeinfo = null;
      console.error(ex);
    })
  }
}
