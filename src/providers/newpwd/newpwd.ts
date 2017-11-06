import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';
import 'rxjs/add/operator/map';
import { UpdatePwd } from "../../model/updatepwd";

@Injectable()
export class NewPwdProvider{
  constructor(
    public http: HttpProvider
  ){}
  /*
  修改密码
  */
  update(data:UpdatePwd){
    return this.http.post('userinfo/updatepwd',data)
  }
}
