import { Component, Input } from '@angular/core';
//import { NavController } from 'ionic-angular';
//import { HttpHandler } from '../../providers/httpHandler';
import { LoginPage } from '../../pages/login/login';

/**
 * Generated class for the LoadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'loading',
  templateUrl: 'loading.html',
})
export class Loading {
  statusValue: boolean;
  @Input() height: string = '100%';
  @Input() mess: string = '什么也木有';
  @Input() keys: string;
  @Input() set status(obj: any) {
    this.statusValue = this.check(obj);
  }
  private state: number = 200;
  constructor() {}

  // ngOnInit() {
  // this.httpHandler.handleError$.subscribe(info => {
  //   if (!info || !info.status) {
  //     this.state = 600;
  //     this.mess = '网路异常，请稍后再试';
  //   } else {
  //     this.state = info.status;
  //     this.mess = info.message || "暂无记录";
  //   }
  // });

  // this.httpHandler.handleAuth$.subscribe(info => {
  //   this.navCtrl.setRoot(LoginPage, {}, { animation: 'md-transition', animate: true });
  // })

  // this.httpHandler.$invoke.subscribe(() => {
  //   this.state = 0;
  // });

  // this.httpHandler.$complete.subscribe(() => {
  //   this.state = 200;
  // });
  // }
  check(obj) {
    let type = Object.prototype.toString.call(obj)
    switch (type) {
      case "[object Undefined]":
        return undefined;
      case "[object Array]":
        return !!obj.length;
      case "[object Object]":
        if (this.keys) {
          let keys = this.keys.split('.');
          for (let i = 0; i < keys.length; i++) {
            if (!obj[keys[i]]) {
              return !!obj[keys[i]];
            } else {
              obj = obj[keys[i]];
              let res = this.check(obj);
              if (!res) return !!res;
            }
          }
          return true;
        } else {
          return !!Object.keys(obj).length;
        }
      default:
        return this.keys ? false : !!obj;
    }
  }
}
