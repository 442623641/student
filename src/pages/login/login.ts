import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user';
import { HOME_PAGE, VALIDATION_PAGE } from '../pages.constants';
import { NativeProvider } from '../../providers/native';
import { TabsPage } from '../../pages/tabs/tabs';
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

  //private focus: boolean;
  //private state: string;
  //private processing: boolean;

  //private account: { usercode: any, pwd: string }; //= { usercode: '17000000013', pwd: '123456' };

  constructor(
    private navCtrl: NavController,
    //private navParams: NavParams,
    private userPro: UserProvider,
    private nativePro: NativeProvider,
    formBuilder: FormBuilder
  ) {
    this.authForm = formBuilder.group({
      usercode: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^1[34578][0-9]{9}$")])],
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
        setTimeout(() => res &&
          res.token &&
          this.navCtrl.setRoot(res.school ?
            TabsPage : PersonalPage, {}, { animate: true, animation: 'md-transition', direction: 'forward' })
          .then(() => this.authForm['processing'] = false), 500);
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
