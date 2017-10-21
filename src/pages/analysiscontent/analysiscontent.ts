import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MenuController } from 'ionic-angular';
//import {} from '../pages.constants';

/**
 * Generated class for the AnalysiscontentPage page.
 * Add by leo zhang 201710010101
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-analysiscontent',
  templateUrl: 'analysiscontent.html',
})
export class AnalysiscontentPage {
  /**
   * child pages
   */
  pages: any = {

  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController
  ) {}

  ngAfterViewInit() {
    console.log('ionViewDidLoad AnalysiscontentPage');
  }

  tap() {
    this.menuCtrl.open();
  }

}
