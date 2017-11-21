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
      /**
      获取某个用户的所有系统消息（已读和未读）
       */
      if(!res || !res.length){
         this.messagedate=null;
      }else{
        this.messagedate=res;
      }
    });
  };
  message(state,guid){
    if(state==0){
      this.messagepro.readed({
        guid : guid
      }).then(res=>{
        console.log(res);
      }).catch(err=>{
        console.log(err);
      });
      document.getElementById(guid).className='block-read-circle';
      this.navCtrl.push(MESSAGEINFO_PAGE,{ guid:guid });
    }
    if(state==1){
       this.navCtrl.push(MESSAGEINFO_PAGE,{ guid:guid });
    }
  }
}
