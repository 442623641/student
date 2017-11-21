import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  } from '../pages.constants';

/**
 * Generated class for the OrdermorePage page.
 * Add by chengyiling
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ordermore',
  templateUrl: 'ordermore.html',
})
export class OrdermorePage {

  /**
   * child pages
   */
  pages:any={

  }
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams
  ) {
  }

  ngAfterViewInit() {
    console.log('ionViewDidLoad OrdermorePage');
  }

}
