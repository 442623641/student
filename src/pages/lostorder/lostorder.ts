import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { LostProvider } from '../../providers/lost/lost';
/**
 * Generated class for the LostorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lostorder',
  templateUrl: 'lostorder.html',
})
export class LostorderPage {
  order: any;
  constructor(
    private navParams: NavParams,
    private lostPro: LostProvider) {}
  ionViewDidLoad() {
    console.log('ionViewDidLoad LostorderPage');
    this.lostPro.order({ guid: this.navParams.get('guid') })
      .then(res => this.order = res)
      .catch(ex => console.log(ex));
  }

}
