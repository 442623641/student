import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
/**
 * Generated class for the TopicsPage page.
 * Add by leo zhang 201710010101
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-topics',
  templateUrl: 'topics.html',
})
export class TopicsPage {
  options: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
  ) {
    this.options = this.navParams.get('options');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicsPage');
  }

}
