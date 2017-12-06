import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LostProvider } from '../../providers/lost/lost';
import { Pageview } from '../../model/pageview';
import { LOSTORDER_PAGE } from '../pages.constants';
/**
 * Generated class for the LostorderPage page.
 * Add by leo zhang 201710010101
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lostorders',
  templateUrl: 'lostorders.html'
})
export class LostordersPage {
  LOSTORDER_PAGE = LOSTORDER_PAGE;
  orders: any[];
  end: boolean;
  page: Pageview;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public lostPro: LostProvider,
    //private modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LostorderPage');
    this.doRefresh();
    //setTimeout(() => this.doRefresh(), 300);
  }
  doRefresh(event ? ) {
    this.page = new Pageview({ viewindex: 1, viewlength: 20 });
    this.end = false;
    this.lostPro.orders(this.page).then(res => {
      event && event.complete();
      if (!res || !res.length) {
        return this.orders = null;
      }
      this.orders = res;
    }).catch(ex => {
      event && event.complete();
      console.log(ex);
      this.orders = null;
    });
  }

  doInfinite(event) {
    this.page.viewindex++;
    this.lostPro.orders(this.page).then(res => {
      event.complete();
      this.end = res ? !res.length : false;
      this.orders = this.orders.concat(res);
    }).catch(ex => {
      event.complete();
      console.log(ex);
    });
  }

}
