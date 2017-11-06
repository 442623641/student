import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  } from '../pages.constants';
import { MessageProvider } from '../../providers/message/message';
/**
 * Generated class for the UnclaimedexamsPage page.
 * Add by chengyiling
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unclaimedexams',
  templateUrl: 'unclaimedexams.html',
})
export class UnclaimedexamsPage {

  /**
   * child pages
   */
  pages:any={

  };
  private unclaimedata: any[];
  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    private unclaimedpro: MessageProvider
  ) {
  }

  ngAfterViewInit() {
    this.unclaimedpro.unclaimexam().then(res=>{
        this.unclaimedata=res;
      }
    );
  }

}
