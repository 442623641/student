import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';
/*
  Generated class for the PasswordProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PasswordProvider {

  constructor(public http: HttpProvider) {};


  /**
   * 注册
   */
  register(data) {
    return this.http.post('register', data);
  }

  /**
   *修改密码
   */
  reset(data) {
    return this.http.post('userinfo/updatepwd', data);
  }

  // ---------------------------------------------------------- 找回密码

  


  /*
   *重新设置密码
   */
  recover(data) {
    return this.http.post('findpwd/updatePwdByTel', data);
  }



}
