import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LostProvider } from '../../providers/lost/lost';
import { PAYMENT_PAGE, LOSTGUIDE_PAGE } from '../pages.constants';
import { LostguidePage } from '../lostguide/lostguide';
import { IView } from '../../model/view';

/**
 * Generated class for the LostorderPage page.
 * Add by leo zhang 201710010101
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lostorder',
  templateUrl: 'lostorder.html',
})
export class LostorderPage {
  orders: any[];
  end: boolean;
  /**
   * child pages
   */
  pages: any = {
    payment: PAYMENT_PAGE,
    guide: LOSTGUIDE_PAGE
  }
  page: IView = { viewindex: 1, viewlength: 8 };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public lostPro: LostProvider,
    private modalCtrl: ModalController
  ) {}

  ngAfterViewInit() {
    console.log('ionViewDidLoad LostorderPage');
    this.lostPro.order(this.page).then(res => {
      if (!res || !res.length) {
        this.orders = null;
      }
      this.orders = res;
    }).catch(ex => {
      console.log(ex);
      this.orders = null;
    })
  }
  download(item) {
    item.processing = true;
    setTimeout(() => item.processing = false, 2000);
  }

  doInfinite($event) {
    this.page.viewindex++;
    this.lostPro.order(this.page).then(res => {
      //$event.complete();
      this.end = res ? res.length : false;
      this.orders = this.orders.concat(res);
    });
  }

  // openGuide() {
  //   let modal = this.modalCtrl.create(LostguidePage);
  //   modal.present();
  // }


}
