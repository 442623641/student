import { Injectable } from '@angular/core';
import { HttpProvider } from "./http";
import { HttpHandler } from "./httpHandler";

/*
 *首页
 */
@Injectable()
export class HomeProvider {
  private URL = 'index';
  constructor(
    private http: HttpProvider,
    private httpHandler: HttpHandler,
  ) {
    console.log('Hello HomeProvider Provider');
  }

  public index() {
    return this.http.get(this.URL);
  }
  public ad() {
    return this.http.post(this.URL + '/getmodel', { position: '微信首页_弹窗' });
  }


}
