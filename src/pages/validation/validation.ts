import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CONFIRM_PAGE } from '../pages.constants';
@IonicPage()
@Component({
  selector: 'page-validation',
  templateUrl: 'validation.html',
})
export class ValidationPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}
  ngAfterViewInit(){}

  goes(event){
    console.log(event.a, event.b);
    this.navCtrl.push(CONFIRM_PAGE,{token: event.a,yzm: event.b})
  }
}
