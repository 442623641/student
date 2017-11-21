import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SETPWD_PAGE } from "../pages.constants";

@IonicPage()
@Component({
  selector: 'page-findpwd',
  templateUrl: 'findpwd.html',
})
export class FindpwdPage {
  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
  ) {}

  ngAfterViewInit() {}
  goes(event){
     console.log(event);
     this.navCtrl.push(SETPWD_PAGE,{token: event.a, code: event.b, tel: event.c})
  }
}
