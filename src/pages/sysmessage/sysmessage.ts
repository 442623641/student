import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageProvider } from '../../providers/message/message';
@IonicPage()
@Component({
  selector: 'page-sysmessage',
  templateUrl: 'sysmessage.html',
})
export class SysmessagePage {
  head: any;
  contents: any;
  time: any;
  url: any;
  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    private messagePro: MessageProvider
  ) {}
  ionViewDidLoad() {
    let guid = this.params.get('guid');
    //console.log(guid);
    this.messagePro.getdetails({ guid: guid }).then(res => {
      console.log(typeof res);
      this.head = res.title;
      this.time = res.createdtime;
      this.contents = res.content;
      this.url = res.linkaddress;
      console.log(this.url);
    })
  }
}
