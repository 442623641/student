import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user';
import { HttpHandler } from "../../providers/httpHandler";
import { HOME_PAGE, VALIDATION_PAGE, PERSONAL_PAGE, TABS_PAGE } from '../pages.constants';
import { NativeProvider } from '../../providers/native';
import { TabsPage } from '../../core/tabs/tabs';
import { PersonalPage } from '../../pages/personal/personal';

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
    validation: VALIDATION_PAGE
  };
  @ViewChild('rocket') rocket: any;
  authForm: FormGroup;

  private focus: boolean;
  private state: string;
  private processing: boolean;

  private account: { usercode: any, pwd: string }; //= { usercode: '17000000013', pwd: '123456' };

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private userPro: UserProvider,
    private httpHandler: HttpHandler,
    private nativePro: NativeProvider,
    formBuilder: FormBuilder
  ) {
    this.authForm = formBuilder.group({
      usercode: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
      pwd: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(50)])],
    });
    this.authForm.valueChanges.subscribe(res => {
      this.authForm['processing'] = this.authForm.valid ? false : undefined;
    });
    this.userPro.getLogin().then(res => {
      res = res || {};
      res.pwd = res.pwd || '';
      res.usercode = res.usercode || '';
      this.authForm.setValue(res);
    })
  }

  login(obj) {
    this.authForm['processing'] = true;
    this.userPro.login(obj).then(res => {
        this.authForm['processing'] = false;
        res && res.token && this.navCtrl.setRoot(res.school ? TabsPage : PersonalPage, {}, { animate: true, animation: 'md-transition', direction: 'forward' });
      })
      .catch((res = { message: "网络异常，请稍后再试" }) => {
        //this.state = "";
        this.authForm['processing'] = false;
        this.nativePro.toast(res.message);
      })
  }

  goForgot() {
    this.rocket.landing();
  }


}
