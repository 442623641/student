import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user';
import { HttpHandler } from "../../providers/httpHandler";
import { FINDPWD_PAGE, HOME_PAGE,VALIDATION_PAGE } from '../pages.constants';
import { NativeProvider } from '../../providers/native';
import { TabsPage } from '../../core/tabs/tabs';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  pages: any = {
    findpwd: FINDPWD_PAGE,
    validation: VALIDATION_PAGE
  };
  @ViewChild('rocket') rocket: any;
  private focus: boolean;
  private state: string;
  private processing: boolean;

  private account: { usercode: any, pwd: string }={ usercode: '17000000013', pwd: '123456' };

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private userProvider: UserProvider,
    private httpHandler: HttpHandler,
    private nativeProvider: NativeProvider
  ) {}

  login() {
    if (!this.account.usercode || !(/^1[34578]\d{9}$/.test(this.account.usercode))) {
      this.nativeProvider.toast('请输入正确的手机号码');
      return;
    }
    if (!this.account.pwd) {
      this.nativeProvider.toast('请输入密码');
      return;
    }
    this.state = "launch";
    this.userProvider.login(this.account).then(res => {
        this.userProvider.initialize(res, this.account).then(() => {
          console.log(res); //测试写缓存
          this.navCtrl.setRoot(TabsPage, {}, { animate: true, animation: "md-transition" }).catch((error) => {
            this.nativeProvider.toast(error);
          });
          this.state = "";

        })
      })
      .catch(res => {
        this.state = "";
        this.nativeProvider.toast(res.message ? res.message : "网络异常，请稍后再试");
      });
    //setTimeout(() => this.navCtrl.setRoot(HOME_PAGE, {}, { animate: true, animation: "wp-transition" }), 3000)

  }

  goForgot() {
    this.rocket.landing();
  }
  input() {
    this.state = this.account.pwd.length > 4 ? "ready" : '';
  }

}
