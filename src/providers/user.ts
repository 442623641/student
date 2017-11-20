/*
用户
*/
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { HttpProvider } from "./http";
import { USERINFO, ACCOUNT } from './providers.constants';
import { HttpHandler } from "./httpHandler";
import { UserInfo } from "../model/userInfo";
import { StaticProvider } from "./static/static";
@Injectable()
export class UserProvider {
  //userInfo:any={};
  private URL = ""; //this.http.domin + "login";
  constructor(
    private http: HttpProvider,
    private storage: Storage,
    private httpHandler: HttpHandler,
    private staticPro: StaticProvider,
  ) {}

  //初始数据
  initialize(userInfo, login: any) {

    this.setLogin(login);
    this.http.setToken(userInfo.token);
    return Promise.all([this.staticPro.getAddressName(userInfo.city), this.staticPro.getGradeName(userInfo.grade)])
      .then(ress => {
        console.log(ress);
        userInfo.cityName = ress[0];
        userInfo.gradeName = ress[1];
        return this.setUserInfo(userInfo);
      });
  }

  login(user) {
    //友盟登陆统计
    //this.mobclickAgent.profileSignInWithPUID(user.usercode);
    return this.http.post(this.URL + 'login', user, true);
  }

  userInfo() {
    return this.http.get(this.URL + 'userinfo/getinfo');
  }


  logout() {
    //友盟登出统计
    //this.mobclickAgent.profileSignOff();
    this.storage.remove(USERINFO);
    this.storage.remove(ACCOUNT);
    this.httpHandler.handleAuth();
    return this.getLogin().then(res => {
      return res && this.setLogin({ usercode: res.usercode });
    });
  }


  setUserInfo(userInfo: UserInfo) {
    this.storage.set(USERINFO, userInfo);
  }

  setLogin(login) {
    return this.storage.set(ACCOUNT, login);
  }

  getLogin() {
    return this.storage.get(ACCOUNT);
  }

  getUserInfo(): Promise < UserInfo > {
    return this.storage.get(USERINFO);
  }
}
