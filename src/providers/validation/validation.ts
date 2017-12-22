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
   * 获取图像验证码
   */
  getcode() {
    return this.http.get('verifyImage');
  }
  
  


 /**
  * 注册时短信验证码和忘记密码时候短信验证码是否正确
  */
  verify(data, api) {
    let apis = { recover: 'findpwd', register: 'register' }
    return this.http.post(apis[api] + '/verifycode', data)
  }


 /**
   验证图像验证码
 */
 verifyimg(data){
   return this.http.post('verifyImage',data);
 }
  
}
