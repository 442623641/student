import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { UserProvider } from '../../providers/user';
import { ABOUTUS_PAGE } from '../pages.constants';
/**
 * Generated class for the SetupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setup',
  templateUrl: 'setup.html',
})
export class SetupPage {
  pages:any={
    aboutus: ABOUTUS_PAGE
  };
  constructor(
    private userProvider: UserProvider
  ) {}
  logout() {
    this.userProvider.logout();
    //this.navCtrl.setRoot(LoginPage, {}, { animation: 'wp-transition', animate: true });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SetupPage');
  }

}
