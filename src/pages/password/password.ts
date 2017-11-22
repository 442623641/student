import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ValidationProvider } from "../../providers/validation/validation";
import { NativeProvider } from '../../providers/native';
/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {
  opwd: any;
  newpwd: any;
  rnewpwd: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private validate: ValidationProvider,
    private native: NativeProvider
  ) {}
  ngAfterViewInit(){}

  confirm(){
    if(this.newpwd.length>=6 && this.rnewpwd.length>=6){
      this.validate.changepwd({ opwd:this.opwd, pwd:this.newpwd, rpwd:this.newpwd }).then(res=>{
        console.log(res);
        this.native.toast('密码修改成功');
      }).catch(err=>{
        this.native.toast(err.message);
      })
    }else{
      this.native.toast('新密码长度不少于6位');
    }

  }
}
