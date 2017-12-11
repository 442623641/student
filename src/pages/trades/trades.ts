import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TradesProvider } from '../../providers/trades/trades';
import { Pageview } from '../../model/pageview';
@IonicPage()
@Component({
  selector: 'page-trades',
  templateUrl: 'trades.html',
})
export class TradesPage {
  page: Pageview; // = { viewindex: 1, viewlength: 10 };
  trades: any[];
  total: number = 0;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tradesPro: TradesProvider) {}

  ionViewDidLoad() {
    setTimeout(() => this.doRefresh(), 450);
  }

  doRefresh(event ? ) {
    //this.end = false;
    this.page = new Pageview({ viewindex: 1, viewlength: 30 });
    this.tradesPro.orders(this.page).then(res => {
      event && event.complete();
      if (!res || !res.list || !res.list.length) {
        return this.trades = null;
      }
      this.trades = res.list;
      this.total = res.total;
    }).catch(ex => {
      event && event.complete();
      console.log(ex);
      this.trades = null;
    })
  }

  doInfinite(event) {
    this.page.viewindex++;
    this.tradesPro.orders(this.page).then(res => {
      event.complete();
      // this.end = res ? !res.length : false;
      this.trades = this.trades.concat(res);
    }).catch(ex => {
      event.complete();
      console.log(ex);
    });
  }
}
