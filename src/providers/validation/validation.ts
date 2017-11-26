import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';
@Injectable()
export class ValidationProvider {
  constructor(public http: HttpProvider) {};

  /**
   * 获取短信验证码
   */
  note(data, api) {
    let apis = { recover: 'findpwd', register: 'register' }
    return this.http.post(apis[api] + '/getsms', data)
  }

  /**
   * 获取验证码
   */
  getcode() {
    return this.http.get('verifyImage');
  }

  /*
   *反馈消息
   */
  feedback(data) {
    return this.http.post('index/feedback', data);
  }
}
