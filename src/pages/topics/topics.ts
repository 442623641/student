import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
/**
 * Generated class for the TopicsPage page.
 * Add by leo zhang 201710010101
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-topics',
  templateUrl: 'topics.html',
})
export class TopicsPage {
  options: any;
  legend: string[];

  constructor(
    navParams: NavParams,
    public viewCtrl: ViewController,
  ) {
    this.options = navParams.get('options');
    this.legend = navParams.get('legend');
  }

}
