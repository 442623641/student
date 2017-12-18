import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { ELOST_PAGE } from '../pages.constants';

/**
 * Generated class for the BookerrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-elostguide',
  templateUrl: 'elostguide.html',
})

export class ElostguidePage {
  constructor(private navCtrl: NavController, private viewCtrl: ViewController) {}
  go() {
    this.navCtrl.push(ELOST_PAGE).then(() =>
      setTimeout(() => {
        this.navCtrl.removeView(this.viewCtrl, { animate: false })
      }, 300)
    );
  }
}
