import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MESSAGE_PAGE ,UNCLAIMEDEXAMS_PAGE } from '../pages.constants';
import { MessageProvider } from '../../providers/message/message';
@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
  pages: any={
    message: MESSAGE_PAGE,
    unclaimedexams: UNCLAIMEDEXAMS_PAGE
  };
  countall: any;
  unreadnum: any;
  unclaimednum: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private messagepro: MessageProvider
  ) {}

  ionViewDidLoad() {}
  ngAfterViewInit(){
    this.messagepro.getItem().then(res=>{
      console.log(res);
       this.countall=res.systemcount;
       this.unreadnum=res.unread;
       this.unclaimednum=res.unclaimed;
    })
  }
}
