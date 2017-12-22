import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { PasswordProvider } from '../../providers/password/password';
import { NativeProvider } from '../../providers/native';
import { UserProvider } from '../../providers/user';
import { LOGIN_PAGE } from '../pages.constants';
/**
 * Generated class for the ConfirmPage page.
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
  authForm: FormGroup;
  params: any;
  type: 'register' | 'recover' | 'reset';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private passwordPro: PasswordProvider,
    private nativepro: NativeProvider,
    private userPro: UserProvider,
    private appCtrl: App,
    formBuilder: FormBuilder,
  ) {
    this.params = this.navParams.get('params') || {};
    this.type = this.navParams.get('type');
    let validate = ['', Validators.compose([Validators.minLength(6), Validators.maxLength(50), Validators.required])],
      controls = {
        password: validate,
        repassword: validate,
      }
    this.type == "reset" && (controls['oldpassword'] = validate);
    this.authForm = formBuilder.group(controls);
    this.authForm.valueChanges.subscribe(res => this.authForm['processing'] = this.authForm.controls.password.valid && res.password === res.repassword ? false : undefined);

  }

  save(obj) {
    if (obj.oldpassword && obj.password == obj.oldpassword) return this.nativepro.toast('旧密码与新密码相同')
    this[this.type](obj);
  }

  /**
   *注册 
  //  */
  register(obj) {
    this.authForm['processing'] = true;
    this.passwordPro.register({ token: this.params.token, pwd: obj.password, rpwd: obj.repassword, code: this.params.code }).then(res => {
      console.log(res);
      this.sucess('注册成功');
    }).catch(err => this.error(err));

  }

  /**
   *设置密码
   */
  recover(obj) {
    this.authForm['processing'] = true;
    this.passwordPro.recover({ token: this.params.pwdtoken, pwd: obj.password, rpwd: obj.password, tel: this.params.phone }).then(res => {
      console.log(res);
      this.sucess('设置成功');
    }).catch((err) => this.error(err));
  }

  /**
   *修改密码
   */
  reset(obj) {
    this.authForm['processing'] = true;
    this.passwordPro.reset({ opwd: obj.oldpassword, pwd: obj.password, rpwd: obj.password }).then(res => {
      console.log(res);
      this.sucess('修改成功');
    }).catch(err => this.error(err));
  }

  private sucess(msg: string) {
    this.nativepro.success(msg);
    this.authForm['processing'] = false;
    this.userPro.getLogin().then(res => {
      res = res || { usercode: '' };
      this.userPro.setLogin({ usercode: this.params.phone || res.usercode, pwd: '' })
        .then(() => this.appCtrl.getRootNav().setRoot(LOGIN_PAGE, {}, { animate: true, animation: 'ios-transition', direction: 'back' }));
    })

  }
  private error(err = { message: '网络延时，请稍后再试' }) {
    console.error(err);
    this.nativepro.toast(err.message);
    this.authForm['processing'] = false;
  }
}
