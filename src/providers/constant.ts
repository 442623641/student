import { Injectable } from '@angular/core';

@Injectable()
export class Constant {

  constructor() {}
  /**
   *服务地址
   */
  DOMIN: string = "";

  /**
   *存储表
   */
  storage: any = {
    USERINFO: "userInfo",
    ACCOUNT: "account",
    TOPICS: "topics",
  };



}
