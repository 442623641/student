import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/*
异常处理
*/

@Injectable()
export class HttpHandler {
  private handleAuthSource = new Subject < any > ();
  private handleMessageSource = new Subject < any > ();
  private invokeSource = new Subject < any > ();
  private completeSource = new Subject < any > ();
  handleErrorSource = new Subject < any > ();
  handleMessage$ = this.handleMessageSource.asObservable();
  handleAuth$ = this.handleAuthSource.asObservable();
  handleError$ = this.handleErrorSource.asObservable();
  $invoke = this.invokeSource.asObservable();
  $complete = this.completeSource.asObservable();

  constructor() {

  }

  invoke() {
    this.invokeSource.next();
  }
  complete() {
    this.completeSource.next();
  }


  // Service message commands
  handleMessage(message: string) {
    //this.handleMessageSource.next(message);
    throw { status: 403, message: message };
  }

  handleAuth(message ? : string) {
    this.handleAuthSource.next(message);
  }

  handleError(error ? : any) {
    //
    this.handleErrorSource.next(error);
    console.error(error);
    //throw error;
  }

  extractData(res) {
    if (!res || !res.status) {
      res = { status: 500, message: res }
      this.handleError(res);
    } else if (res.status == 200) //成功
    {
      this.complete();
      return res.data;
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
