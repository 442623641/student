import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MessageProvider } from '../../providers/message/message';
@IonicPage()
@Component({
  selector: 'page-messageinfo',
  templateUrl: 'messageinfo.html',
})
export class MessageInfoPage {
  pages:any={

  };
   head: any;
   contents: any;
   time: any;
   url: any;
  constructor(
  	public navCtrl: NavController,
  	public params: NavParams,
    private messagepro: MessageProvider
  ){

  }
  ionViewDidLoad() {};
  ngAfterViewInit() {
   let guid=this.params.get('guid');
   console.log(guid);
   this.messagepro.getdetails({ guid: guid }).then(res=>{
     console.log(typeof res);
     this.head=res.title;
     this.time=res.createdtime;
     this.contents=res.content;
     this.url=res.linkaddress;
     console.log(this.url);
   })
  }
}
