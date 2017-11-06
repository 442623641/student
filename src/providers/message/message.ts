import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';
import { IView } from '../../model/view';
import 'rxjs/add/operator/map';
@Injectable()
export class MessageProvider {

  constructor(public http: HttpProvider) {
    console.log('Hello MessageProvider Provider');
  }
  //获取某个用户的所有系统消息（已读和未读）
  message(page: IView){
    return this.http.get('message/allmessages',page)
  }
  //消息条数统计
  getItem(){
    return this.http.get('message/messagestatistics')
  }
  //获取未认领的考试
  unclaimexam(){
    return this.http.get('exam/unclaimexam')
  }
  //设置为已读系统消息
  readed(data){
    return this.http.post('message/readsystemmessage',data)
  }
  //系统消息详情
  getdetails(data){
    return this.http.get('message/messagedetail',data);
  }
}
