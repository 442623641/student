import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';
//import { IView } from '../../model/view';
@Injectable()
export class ClaimProvider {

  constructor(public http: HttpProvider) {
    console.log('Hello ClaimProvider Provider');
  }

  //获取未认领的考试
  unclaimexam() {
    return this.http.get('exam/unclaimexam')
  }
  /**
   * 获取考号图像
   */
  examineeimg(data) {
    return this.http.get('exam/studentcodeImg', data, true);
  }
  /*
   *认领考试
   */
  claimexam(data) {
    return this.http.post('exam/claimexam', data);
  }

}
