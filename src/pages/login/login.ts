import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user';
import { HttpHandler } from "../../providers/httpHandler";
import { VALIDATION_PAGE, HOME_PAGE } from '../pages.constants';
import { NativeProvider } from '../../providers/native';
import { TabsPage } from '../../core/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';

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
    validation: VALIDATION_PAGE,
  }
  @ViewChild('rocket') rocket: any;
  private focus: boolean;
  private state: string;
  private processing: boolean;

  private account: { usercode: any, pwd: string } = { usercode: '', pwd: '' };

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private userProvider: UserProvider,
    private httpHandler: HttpHandler,
    private nativeProvider: NativeProvider,
    private statusBar: StatusBar
  ) {}
  ngOnInit() {
    //this.userProvider.getLogin().then(login => {this.account = login});
  }

  login(event) {
    console.log(event);
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
          //this.statusBar.overlaysWebView(true);
          this.navCtrl.setRoot(TabsPage, {}, { animate: true, animation: "md-transition" }).catch((error) => {
            this.nativeProvider.toast(error);
          });
          this.state = "";

        })
      })
      .catch(res => {
        console.log(res);
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
