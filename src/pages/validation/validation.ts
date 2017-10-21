import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user';
import { CONFIRM_PAGE } from '../pages.constants';
/**
 * Generated class for the ValidationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-validation',
  templateUrl: 'validation.html',
})
export class ValidationPage {
  pages = {
    confirm: CONFIRM_PAGE,
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ValidationPage');
  }

}
