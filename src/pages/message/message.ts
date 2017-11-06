import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MessageProvider } from '../../providers/message/message';
import { MESSAGEINFO_PAGE } from '../pages.constants';
import { IView } from '../../model/view';
@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html'
})
export class MessagePage {
  pages:any={
    messageinfo: MESSAGEINFO_PAGE
  };
  view: IView={ viewindex: 1, viewlength: 10 };
  messagedate: any[];
  switch: number=0;
  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    private messagepro: MessageProvider
  ) {}
  ionViewDidLoad() {
  };
  ngAfterViewInit() {
    this.messagepro.message(this.view).then(res=>
    {
      this.messagedate=res;
      console.log(res);
    });
  };
  message(state,guid){
    if(state==0){
      this.switch=1;
      this.messagepro.readed({
        guid : guid
      });
      this.navCtrl.push(MESSAGEINFO_PAGE,{ guid:guid });
    }
    if(state==1){
       this.navCtrl.push(MESSAGEINFO_PAGE,{ guid:guid });
    }
  }
}
