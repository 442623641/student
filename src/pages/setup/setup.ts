import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { UserProvider } from '../../providers/user';
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

  constructor(
    private userProvider: UserProvider) {}
  logout() {
    this.userProvider.logout();
    //this.navCtrl.setRoot(LoginPage, {}, { animation: 'wp-transition', animate: true });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SetupPage');
  }

}
