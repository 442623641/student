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
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserProvider {
  private userInfoSource = new Subject < any > ();
  userInfo$ = this.userInfoSource.asObservable();
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
    userInfo && this.http.setToken(userInfo.token);
    return userInfo && userInfo.school ? Promise.all([this.staticPro.getAddressName(userInfo.city), this.staticPro.getGradeName(userInfo.grade)])
      .then(ress => {
        console.log(ress);
        userInfo.cityName = ress[0];
        userInfo.gradeName = ress[1];
        this.setUserInfo(userInfo)
        return userInfo;
      }) : userInfo;
  }

  login(user) {
    //友盟登陆统计
    //this.mobclickAgent.profileSignInWithPUID(user.usercode);
    return this.http.post(this.URL + 'login', user, true).then(res => {
      return res && res.token ? this.initialize(res, user) : res;
    })
  }

  userInfo() {
    return this.http.get(this.URL + 'userinfo/info');
  }


  logout() {
    //友盟登出统计
    //this.mobclickAgent.profileSignOff();
    this.storage.remove(USERINFO);
    return this.getLogin().then(res => {
      this.storage.remove(ACCOUNT);
      return res && this.setLogin({ usercode: res.usercode }).then(res => this.httpHandler.handleAuth());
    });
  }

  setLogin(login) {
    return this.storage.set(ACCOUNT, login);
  }

  getLogin() {
    return this.storage.get(ACCOUNT);
  }


  setUserInfo(userInfo: UserInfo) {
    return this.storage.set(USERINFO, userInfo).then(res => this.userInfoSource.next(res));
  }


  getUserInfo(): Promise < UserInfo > {
    return this.storage.get(USERINFO); //.then(res => this.userInfoSource.next(res));
  }
}
