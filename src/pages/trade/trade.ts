import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TradeProvider } from '../../providers/trade/trade';

/**
 * Generated class for the TradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trade',
  templateUrl: 'trade.html',
})
export class TradePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public tradePro: TradeProvider) {}

  ngAfterViewInit() {
    this.tradePro.order().then(res => {
      console.log('ionViewDidLoad TradePage');
    });

  }

}
