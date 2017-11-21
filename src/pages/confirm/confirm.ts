import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ValidationProvider } from '../../providers/validation/validation';
import { NativeProvider } from '../../providers/native';
/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {
  password: any='';
  confirmpwd: any='';
  tokenss: any;
  yzmss: any;
  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    private validation: ValidationProvider,
    private nativepro: NativeProvider
  ) {}

  ngAfterViewInit(){}
  confirm(){
    /**
     注册
     */
    this.tokenss=this.params.get('token');
    this.yzmss=this.params.get('yzm');
    console.log(this.tokenss,this.yzmss);
    console.log(this.password,this.confirmpwd);
    if(this.password.length>=6 && this.confirmpwd.length>=6){
      this.validation.register({ token:this.tokenss,code:this.yzmss,pwd: this.password, rpwd: this.confirmpwd }).then(res=>
      {
        console.log(res);
        this.nativepro.toast('注册成功');
      }).catch(err=>
      {
        console.log(err);
        this.nativepro.toast(err.message);
      });
    }else{
      this.nativepro.toast('密码长度不少于6位');
    }


  }
}
