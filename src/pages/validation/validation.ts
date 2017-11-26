import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ValidationProvider } from '../../providers/validation/validation';
import { NativeProvider } from '../../providers/native';
import { PASSWORD_PAGE } from '../pages.constants';

@IonicPage()
@Component({
  selector: 'page-validation',
  templateUrl: 'validation.html'
})


export class ValidationPage {
  pages = {
    confirm: PASSWORD_PAGE,
  }
  ticket: any;
  authForm: FormGroup;
  token: string;
  checked: boolean = true;
  tips = "获取验证码";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private validationPro: ValidationProvider,
    private nativePro: NativeProvider,
    formBuilder: FormBuilder
  ) {
    this.authForm = formBuilder.group({
      phone: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
      code: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(8)])],
    });
    this.authForm.controls.phone.setValue('18225605425');
  }

  /**
   *获取token
   */
  code(phone: string) {
    console.log(this.authForm);
    //token 验证
    this.ticket ? this.sendcode(phone) :
      this.validationPro.getcode()
      .then(res => {
        if (!res || !res.token) return;
        this.ticket = res;
        this.sendcode(phone);
      }).catch(ex => this.nativePro.toast('网络延时，请稍后再试'));
  }

  /**
   *发送验证码
   */
  private sendcode(phone: string) {
    this.token = null;
    this.authForm.controls.code.setValue('');
    this.validationPro.note({ token: this.ticket.token, tel: phone, yzm: this.ticket.img }, this.navParams.get('type')).then(res => {
      if (!res || !res.token) return;
      this.token = res.token;
      this.authForm.controls.code.setValue(res.code);
      let num = 60;
      this.tips = num + 's后重新获取';
      const timer = setInterval(() => {
        num--;
        if (num <= 0) {
          this.tips = '获取验证码';
          clearInterval(timer);
        } else {
          this.tips = num + 's后重新获取';
        }
      }, 1000);
    }).catch(err => this.nativePro.toast(err.message));
  }

  onSubmit(value: any) {
    this.navCtrl.push(this.pages.confirm, {
      type: this.navParams.get('type'),
      params: Object.assign({
        token: this.token
      }, value)
    });
  }

}
