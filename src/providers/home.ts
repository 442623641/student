import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpProvider } from "./http";
import { Constant } from "./constant";
import { HttpHandler } from "./httpHandler";
import { TabsProvider } from "./tabs/tabs";

/*
 *首页
 */
@Injectable()
export class HomeProvider {
  private URL = 'index';
  constructor(
    private http: HttpProvider,
    private storage: Storage,
    private constant: Constant,
    private httpHandler: HttpHandler,
    private tabsPro: TabsProvider
  ) {
    console.log('Hello HomeProvider Provider');
  }

  public index() {
    return this.http.get(this.URL);
  }
  public ad() {
    return this.http.post(this.URL + '/getmodel', { position: '微信首页_弹窗' });
  }

  public setBadge(num: number) {
    this.tabsPro.setBadge(num);
  }


}
