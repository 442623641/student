import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ValidationProvider } from "../../providers/validation/validation";
import { NativeProvider } from '../../providers/native';
/**
 * Generated class for the SetpwdPage page.
 * Add by chengyiling
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setpwd',
  templateUrl: 'setpwd.html',
})
export class SetpwdPage {
  password: any;
  confirmpwd: any;
  tokenss: any;
  codes: any;
  tels:any;
  /**
   * child pages
   */
  pages:any={

  };
  constructor(
  	public navCtrl: NavController,
  	public params: NavParams,
    private validate: ValidationProvider,
    private nativepro: NativeProvider
  ) {}

  ngAfterViewInit() {}

  willgo(){
    /*
    *重新设置密码
     */
    this.tokenss=this.params.get('token');
    this.codes=this.params.get('code');
    this.tels=this.params.get('tel');
    console.log(this.tokenss,this.codes,this.tels);
    this.validate.verifynote({token: this.tokenss, code: this.codes, tel: this.tels}).then(res=>{


      if(this.password.length>=6 && this.confirmpwd>=6){


      this.validate.updatepwd({token: res.token, pwd: this.password, rpwd: this.confirmpwd,tel: this.tels}).then(res=>{
        this.nativepro.toast('密码找回成功');
      }).catch(err=>{
        this.nativepro.toast(err.message);
      });

      }else{
        this.nativepro.toast('新密码长度不少于6位');
      }



    }).catch(err=>{
      this.nativepro.toast(err.message);
    });



}




}
