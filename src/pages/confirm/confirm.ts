import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NewPwdProvider } from '../../providers/newpwd/newpwd';
/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {
  pwd: any;
  confirmpwd: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private newpwdpro: NewPwdProvider
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmPage');
  }
  ngAfterViewInit(){
    this.newpwdpro.update({ pwd: this.pwd, rpwd: this.confirmpwd }).then(res=>{
      console.log(res);
    })
  }
}
