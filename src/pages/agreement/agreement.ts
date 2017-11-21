import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import {  } from '../pages.constants';

/**
 * Generated class for the AgreementPage page.
 * Add by chengyiling
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-agreement',
  templateUrl: 'agreement.html',
})
export class AgreementPage {
  /**
   * child pages
   */
  type:any;
  pages:any={

  };
  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams
  ) {}
  ngAfterViewInit() {
    this.type=this.navParams.get('type');
  }

}
