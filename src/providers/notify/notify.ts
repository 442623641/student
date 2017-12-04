import { HttpProvider } from '../http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
/*
  Generated class for the NotifyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NotifyProvider {
  private countSource = new Subject < any > ();
  distribution: any;
  count$ = this.countSource.asObservable();

  constructor(public http: HttpProvider) {
    console.log('Hello NotifyProvider Provider');
  }

  add(type: string, num: number = 0) {
    this.distribution[type] && (this.distribution[type] += num);
    this.countSource.next(this.distribution.unread + this.distribution.unclaimed);
  }

  //消息条数统计
  statistics() {
    return this.http.get('message/messagestatistics').then(res => {
      this.distribution = res || {};
      let count = this.distribution.unread + this.distribution.unclaimed;
      this.countSource.next(count);
      return this.distribution;
    });
  }
}
