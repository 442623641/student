import { HttpProvider } from "../http";
import { Injectable } from '@angular/core';

/*
  Generated class for the AppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppProvider {

  constructor(public http: HttpProvider) {
    console.log('Hello AppProvider Provider');
  }

  /*
   *反馈消息
   */
  feedback(data, path ? ) {
    return path ? this.http.uploadFile('index/feedback', data, path) : this.http.post('index/feedback', data);
  }
}
