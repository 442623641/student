import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';
import 'rxjs/add/operator/map';
@Injectable()
export class ValidationProvider{
  constructor(public http: HttpProvider){};
  /**
  获取注册短信
   */
  getnote(data){
    return this.http.post('Register/getsms',data,true);
  }
  /**
  注册
    code:短信验证码,
    pwd:密码,
    rpwd:确认密码
   */
  register(data){
    return this.http.post('register',data,true);
  }
  /**
  获取验证码
   */
  getcode(){
    return this.http.get('verifyImage',true);
  }
  /**
   修改密码
  */
  changepwd(data){
    return this.http.post('userinfo/updatepwd',data,true);
  }

  // ---------------------------------------------------------- 找回密码
  /*
    获取忘记密码的短信验证码
   */
  findpwdnote(data){
    return this.http.post('findpwd/getsms',data,true);
  }

  /*
    检测短信验证码
   */
  verifynote(data){
    return this.http.post('findpwd/verifyCode',data,true);
  }

  /*
  重新设置密码
   */
  updatepwd(data){
    return this.http.post('findpwd/updatePwdByTel',data,true);
  }

  /*
  反馈消息
   */
  back(data){
     return this.http.post('index/feedback',data,true);
  }
}
