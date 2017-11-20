import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LostProvider } from '../../providers/lost/lost';
import { PAYMENT_PAGE, LOSTGUIDE_PAGE } from '../pages.constants';
import { LostguidePage } from '../lostguide/lostguide';
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

  /**
   * child pages
   */
  pages: any = {
    payment: PAYMENT_PAGE,
    guide: LOSTGUIDE_PAGE
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public lostPro: LostProvider,
    private modalCtrl: ModalController
  ) {}

  ngAfterViewInit() {
    console.log('ionViewDidLoad LostorderPage');
    //this.lostPro.lastOrder().then(res => console.log(res));
  }

  /**
   *查看
   */
  // openGuide() {
  //   let modal = this.modalCtrl.create(LostguidePage);
  //   modal.present();
  // }


}
