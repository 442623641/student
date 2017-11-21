import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {} from '../pages.constants';

/**
 * Generated class for the SchoolsPage page.
 * Add by leo zhang 201711010101
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schools',
  templateUrl: 'schools.html',
})
export class SchoolsPage {
  pages: any = {}

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    // public schoolsPro:schoolsProvider

  ) {}

  ngAfterViewInit() {
    console.log('ionViewDidLoad SchoolsPage');
  }
  ionInput(event) {

  }
  onCancel(event) {

  }

}
