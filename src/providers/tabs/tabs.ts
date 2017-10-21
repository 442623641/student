import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/*
工具栏事件服务
*/
@Injectable()
export class TabsProvider {
  private badgeSource = new Subject < any > ();
  $badge = this.badgeSource.asObservable();
  constructor() {
    console.log('Hello TabsProvider Provider');
  }

  setBadge(num: number = 0) {
    this.badgeSource.next(num);
  }

}
