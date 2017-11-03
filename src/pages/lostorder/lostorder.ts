import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LostProvider } from '../../providers/lost/lost';
import {} from '../pages.constants';

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

  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public lostPro: LostProvider,
  ) {}

  ngAfterViewInit() {
    console.log('ionViewDidLoad LostorderPage');
  }

}
