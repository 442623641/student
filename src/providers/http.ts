import { Injectable } from '@angular/core';
//import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Headers, Http } from '@angular/http';
import { HTTP } from '@ionic-native/http';

import { HttpHandler } from "./httpHandler";

import { Platform } from 'ionic-angular';

import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';
/*
 *本项目中用到API访问控制，思路是除了公开API，其他的都需要用token去访问，而这个token是和用户挂钩的，
 *在登陆成功就生成了，调用系统功能时每个人必须带上自己的token，否则API返回401.
 *实现思路是：登录时返回用户信息，其中包含token存储在本地，以后调用时从本地取出，
 *连同请求一起发给服务器。要实现4种请求
 *httpGetWithAuth、httpGetNoAuth、httpPostNoAuth、httpPostWithAuth
 */
@Injectable()
export class HttpProvider {
  version: string = '1.0.0';

  isNative: boolean;
  domin: string = 'http://studentapp.septnet.cc/';
  token: string;

  /*
   * http 请求
   *
   * @param url: string,
   * @param body:object，
   * @param headers:Headers
   */
  get: Function;

  /**
   * http 请求
   *
   * @param url: string,
   * @param body:object，
   * @param headers:Headers
   */
  post: Function;


  constructor(
    private http: Http,
    private nativeHttp: HTTP,
    private handleService: HttpHandler,
    private platform: Platform,
  ) {
    //this.init();
    this.isNative = this.platform.is('mobile') && !this.platform.is('mobileweb');
    this.initialize(this.version);
  }

  enableSSL(): Promise < any > {

    if (this.isNative && this.domin.indexOf('https') > -1) {
      this.nativeHttp.enableSSLPinning(true);
      return this.nativeHttp.acceptAllCerts(true);
    } else {
      return Promise.resolve();
    }

  }


  initialize(version: string) {
    console.log('HttpProvider initialize');
    this.setVersion(version);
    if (this.isNative) {
      //真机环境
      this.get = this.nativeGet;
      this.post = this.nativePost;
    } else {
      //web环境
      this.domin = window.location.origin + '/';
      this.get = this.webGet;
      this.post = this.webPost;
    }
    return this.enableSSL();
  }

  setToken(token: string) {
    this.token = token;
  }

  setVersion(version: string) {
    this.version = version;
  }



  /*auto url for develop*/
  private url(url: string) {
    return this.domin + url;

  }

  private json(res: any) {
    //console.log(JSON.stringify(res));
    let data = {};
    try {
      if (res.status >= 400) {
        throw { status: 600, message: '请查看网络是否连接' }
      }
      if (res.data) {
        data = JSON.parse(res.data);
      } else {
        data = res.json();
      }
    } catch (ex) {
      return this.catchError(ex);

    }
    return this.handleService.extractData(data);

  }

  uploadFile(url, body, filePath) {
    return this.nativeHttp.uploadFile(this.url(url),
        body, { Token: this.token, Version: this.version },
        filePath,
        'feedback.png')
      .then(res => this.json(res))
      .catch(err => this.catchError(err));
  }
  downloadFile(url, filePath, body ? ) {
    return this.nativeHttp.downloadFile(url, body || {}, {}, filePath)
  }

  /*
   * http get sdk 请求
   * @param url: string,
   * @param body:object，
   * @param headers:Headers
   */
  private nativeGet(url: string, body ? : any, inject ? : boolean) {
    body = body || {};
    url = this.url(url);
    return this.nativeHttp.get(url + '?' + this.toParams(body), {}, { Token: this.token, Version: this.version })
      .then(res => this.json(res))
      .catch(err => this.catchError(err));
  }

  /*
   * xmlhttprequest get 请求
   *
   * @param url: string,
   * @param body:object，
   * @param headers:Headers
   */
  private webGet(url: string, body ? : any, inject ? : boolean) {
    body = body || {};
    url = this.url(url);
    let headers = new Headers()
    headers.append('Content-Type', 'application/json; charset=utf-8');
    headers.append('Version', this.version);
    this.token && headers.append('Token', this.token);
    return this.http.get(url + '?' + this.toParams(body), { headers })
      .toPromise()
      .then(res => this.json(res))
      .catch(err => this.catchError(err));
  }

  /*
   * http post sdk 请求
   *
   * @param url: string,
   * @param body:object，
   * @param headers:Headers
   */
  private nativePost(url: string, body ? : any) {

    body = body || {};
    url = this.url(url);
    return this.nativeHttp.post(url, this.serializer(body), { Token: this.token, Version: this.version })
      .then(res => this.json(res))
      .catch(err => this.catchError(err));
  }

  /*
   * xmlhttprequest post 请求
   *
   * @param url: string,
   * @param body:object，
   * @param headers:Headers
   */
  private webPost(url: string, body ? : any) {
    body = body || {};
    url = this.url(url);
    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    headers.append('Version', this.version);
    this.token && headers.append('Token', this.token);
    //let options = new RequestOptions({ headers: headers });
    return this.http.post(url, this.toParams(body), { headers })
      .toPromise()
      .then(res => this.json(res))
      .catch(err => this.catchError(err));
  }


  private toParams(obj ? : any) {
    if (!obj) return;
    let ret = [],
      keys = Object.keys(obj);
    keys.forEach(key => obj[key] === undefined || ret.push(this.toQueryPair(key, typeof obj[key] == 'object' ? JSON.stringify(obj[key]) : obj[key])));
    return ret.join('&');
  }

  private serializer(obj ? : any) {
    if (!obj) return;
    let sobj = {},
      keys = Object.keys(obj);
    keys.forEach(key => {
      if (obj[key] !== undefined) {
        sobj[key] = typeof obj[key] == 'object' ? JSON.stringify(obj[key]) : obj[key];
      }
    });
    return sobj;
  }

  private toQueryPair(key, value) {
    if (typeof value === undefined) return;
    return key + '=' + encodeURIComponent(value === null ? '' : String(value));
  }

  private catchError(err = { message: '网络延时，请稍后再试' }) {
    //autoCompletethis.han
    err.message = err.message || '网络延时，请稍后再试';
    this.handleService.handleError(err);
  }

}
