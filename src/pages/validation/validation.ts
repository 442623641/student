import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ValidationProvider } from '../../providers/validation/validation';
import { NativeProvider } from '../../providers/native';
import { PASSWORD_PAGE, VALIDATIONMODAL_PAGE } from '../pages.constants';
@IonicPage()
@Component({
  selector: 'page-validation',
  templateUrl: 'validation.html'
})


export class ValidationPage {
  findpwdtoken: any;
  num: any;
  ticket: any;
  authForm: FormGroup;
  token: string;
  checked: boolean = true;
  tips = "获取验证码";
  verify = { phone: '', code: '' };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private validationPro: ValidationProvider,
    private nativePro: NativeProvider,
    formBuilder: FormBuilder
  ) {
    this.authForm = formBuilder.group({
      phone: [this.navParams.get('phone') || '', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^1[0-9]{10}$")])],
      code: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(6)])],
    });
    //this.authForm.controls.phone.setValue('18225605425');
  }

  /**
   *获取token
   */
  code(phone: string) {
    let modal = this.modalCtrl.create(VALIDATIONMODAL_PAGE);
    modal.present();
    modal.onDidDismiss(res => {
      if (!res) return;
      this.ticket = res.ticket;
      this.num = res.code;
      this.sendcode(phone);
    })
  }


  /**
   *发送验证码
   */

  private sendcode(phone: string) {
    this.authForm.controls.code.setValue('');
    this.validationPro.note({ token: this.ticket.token, tel: phone, yzm: this.num }, this.navParams.get('type'))
      .then(res => {
        if (!res || !res.token) return;
        this.token = res.token;
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
    console.log(value.phone);
    this.validationPro.verify({ token: this.token, tel: value.phone, code: value.code }, this.navParams.get('type')).then(res => {
        if (res.token) {
          this.findpwdtoken = res.token;
        }

        this.navCtrl.push(PASSWORD_PAGE, {
          type: this.navParams.get('type'),
          params: Object.assign({
            token: this.token,
            pwdtoken: this.findpwdtoken
          }, value)
        });
      })
      .catch(err => err && this.nativePro.toast("请输入正确的验证码"))

  }

}
