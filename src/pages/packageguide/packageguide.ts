import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController } from 'ionic-angular';
import { PACKAGE_PAGE } from '../pages.constants';

/**
 * Generated class for the PackageguidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-packageguide',
  templateUrl: 'packageguide.html',
})
export class PackageguidePage {

  constructor(private navCtrl: NavController, private viewCtrl: ViewController) {}
  go() {
    this.navCtrl.push(PACKAGE_PAGE).then(() =>
      setTimeout(() => {
        this.navCtrl.removeView(this.viewCtrl, { animate: false })
      }, 300)
    );
  }
}
