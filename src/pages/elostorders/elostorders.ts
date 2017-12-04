import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LostProvider } from '../../providers/lost/lost';
import { PAYMENT_PAGE, ELOSTUSAGE_PAGE, DOWNLINK_PAGE } from '../pages.constants';
import { ElostguidePage } from '../elostguide/elostguide';
import { Pageview } from '../../model/pageview';

/**
 * Generated class for the LostorderPage page.
 * Add by leo zhang 201710010101
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-elostorders',
  templateUrl: 'elostorders.html'
})
export class ElostordersPage {
  orders: any[];
  end: boolean;
  /**
   * child pages
   */
  pages: any = {
    payment: PAYMENT_PAGE,
    usage: ELOSTUSAGE_PAGE,
    downlink: DOWNLINK_PAGE
  }
  page: Pageview;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public lostPro: LostProvider,
    private modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LostorderPage');
    setTimeout(() => this.doRefresh(), 300);
  }
  doRefresh(event ? ) {
    this.page = new Pageview({ viewindex: 1, viewlength: 8 });
    this.end = false;
    this.lostPro.eorders(this.page).then(res => {
      event && event.complete();
      if (!res || !res.length) {
        return this.orders = null;
      }
      this.orders = res;
    }).catch(ex => {
      event && event.complete();
      console.log(ex);
      this.orders = null;
    })
  }
  download(item) {
    if (item.processing) return;
    item.processing = true;
    this.lostPro.downlink({ guid: item.guid }).then(res => {
      item.processing = false;
      if (!res || !res.url) {
        return;
      }
      item.url = res.url;
      item.code = res.code;
      this.navCtrl.push(this.pages.downlink, { order: item });
      console.log(res);
    }).catch(ex => {
      item.processing = false;
      console.log(ex);
    });
  }

  doInfinite(event) {
    this.page.viewindex++;
    this.lostPro.eorders(this.page).then(res => {
      event.complete();
      this.end = res ? !res.length : false;
      this.orders = this.orders.concat(res);
    }).catch(ex => {
      event.complete();
      console.log(ex);
    });
  }

}
