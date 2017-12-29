import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, App } from 'ionic-angular';
import { UserProvider } from '../../providers/user';
import { VALIDATION_PAGE, PERSONAL_PAGE, TABS_PAGE } from '../pages.constants';
import { NativeProvider } from '../../providers/native';

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
  fadeout: boolean;
  constructor(
    private navCtrl: NavController,
    private userPro: UserProvider,
    private nativePro: NativeProvider,
    private appCtrl: App,
    formBuilder: FormBuilder
  ) {
    // Validators.pattern("^1[123456789][0-9]{9}$")
    this.authForm = formBuilder.group({
      usercode: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^1[0-9]{10}$")])],
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
        if (!res || !res.token) return;
        if (res.school) {
          this.appCtrl.getRootNavs()[0].setRoot(TABS_PAGE, {}, {
            animate: true,
            animation: 'md-transition',
            direction: 'back',
            duration: 500
          }).then(res => this.authForm['processing'] = false)
        } else {
          this.navCtrl.push(PERSONAL_PAGE).then(res => {
            this.authForm['processing'] = false;
          })
        }
      })
      .catch((res = { message: "网络异常，请稍后再试", status: 500 }) => {
        this.authForm['processing'] = false;
        this.nativePro.toast(res.message);
        if (res.status == 1404) {
          setTimeout(() =>
            this.navCtrl.push(this.pages.validation, { type: 'register', phone: obj.usercode }), 800);
        }
      })
  }

  goForgot() {
    this.rocket.landing();
  }
}
