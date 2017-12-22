import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController } from 'ionic-angular';
import { ValidationProvider } from '../../providers/validation/validation';
import { NativeProvider } from '../../providers/native';
/**
 * Generated class for the ValidationmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-validationmodal',
  templateUrl: 'validationmodal.html',
})
export class ValidationmodalPage {
  url:string;
  ticket:any;
  code:string;
  constructor(
  	public navCtrl: NavController,
  	public navParams: NavParams,
    public viewCtrl: ViewController,
    private validatepro:ValidationProvider,
    private nativePro: NativeProvider
  	) {}
  
   ngAfterViewInit(){
   	 this.refresh();
   }
  confirm(){
  	 console.log(this.code,this.ticket.token)
  	  this.validatepro.verifyimg({token:this.ticket.token, yzm: this.code}).then(res=>{
        if(res){
          console.log(res);
          this.viewCtrl.dismiss({ticket:this.ticket,code:this.code});
        }
  	  }).catch(err=>{
        if(err){
          this.nativePro.toast(err.message);
        }
  	  })
  	}
  
  
  
  refresh(){
	this.validatepro.getcode()
      .then(res => {
        if (!res || !res.token) return;
        this.ticket = res;
        this.url= res.img;
     }).catch(ex => this.nativePro.toast('网络延时，请稍后再试'));

       
  }



}
