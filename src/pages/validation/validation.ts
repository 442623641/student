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
  ticket: any;
  authForm: FormGroup;
  token: string;
  checked: boolean = true;
  tips = "获取验证码";
  verify = { phone: '', code: '' };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private validationPro: ValidationProvider,
    private nativePro: NativeProvider,
    formBuilder: FormBuilder
  ) {
    this.authForm = formBuilder.group({
      phone: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^1[34578][0-9]{9}$")])],
      code: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(6)])],
    });
    //this.authForm.controls.phone.setValue('18225605425');
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
      this.verify = { code: res.code, phone: phone };
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
    if (this.verify.code != value.code || value.phone != this.verify.phone) return this.nativePro.prompt("请输入正确的验证码");
    this.navCtrl.push(PASSWORD_PAGE, {
      type: this.navParams.get('type'),
      params: Object.assign({
        token: this.token
      }, value)
    });
  }

}
