import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { App } from 'ionic-angular';
import { NativeProvider } from './native';

/*
异常处理
*/

@Injectable()
export class HttpHandler {
  loging: boolean;
  private handleAuthSource = new Subject < any > ();
  private handleMessageSource = new Subject < any > ();
  private handleErrorSource = new Subject < any > ();
  handleMessage$ = this.handleMessageSource.asObservable();
  handleAuth$ = this.handleAuthSource.asObservable();
  handleError$ = this.handleErrorSource.asObservable();

  constructor(private appCtrl: App, private nativePro: NativeProvider) {

  }

  // Service message commands
  handleMessage(message: string) {
    //this.handleMessageSource.next(message);
    throw { status: 403, message: message };
  }

  handleAuth(message ? : string) {
    const LOGIN = 'LoginPage';
    if (this.loging) return;
    this.loging = true;
    message && this.nativePro.toast(message);
    if (this.appCtrl.getActiveNav().getActive().id == LOGIN) return;
    this.appCtrl.getRootNavs()[0].setRoot(LOGIN, {}, { animate: true, animation: 'md-transition', direction: 'back' });
    setTimeout(() => this.loging = false, 1000);
    //this.handleAuthSource.next(message);
  }

  handleError(error ? : any) {
    this.handleErrorSource.next(error);
    console.error(error);
    throw error;
  }

  extractData(res) {
    if (!res || !res.status) {
      res = { status: 500, message: res }
      this.handleError(res);
    } else if (res.status == 200) //成功
    {
      return res.data || {};
    } else if (res.status == 401) {
      this.handleAuth(res.message);
      throw res;
    } else if (res.status == 403) {
      this.handleMessage(res.message);
      throw res;
    } else {
      this.handleError(res);
      throw res;
    }
  }

}
