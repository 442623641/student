import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';
import { Pageview } from '../../model/pageview';

/*
  Generated class for the ExamsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExamsProvider {

  constructor(public http: HttpProvider) {
    console.log('Hello ExamsProvider Provider');
  }

  /**
   *考试列表
   */
  exams(page: Pageview) {
    return this.http.get('exam', page);
  }

  /**
   *学情报告
   */
  report(data) {
    return this.http.get('exam/report', data);
  }

  /**
   *成绩趋势
   */
  scoretrend(data) {
    return this.http.get('exam/scoretrend', data);
  }

  /**
   *排名趋势
   */
  ranktrend(data) {
    return this.http.get('exam/ranktrend', data, true);
  }

  /**
   *排名对比
   */
  comrank(data) {
    return this.http.get('exam/rank', data);
  }

}
