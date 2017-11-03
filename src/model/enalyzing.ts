import { CategoryOptions } from './subjecte';
/**
 *条件筛选
 */
export class EOptions {
  /**
   *科目名称
   */
  subject: string;
  /**
   *月份
   */
  month: number;

  constructor(obj) {
    this.subject = obj.subject;
    this.month = obj.month || 0;

  }

  clone() {
    return new EOptions(this);
  }
}
export class ExamOptions {
  /**
   *考试id
   */
  guid: string;

  /**
   *考试名称
   */
  name: string;

  /**
   *考试时间
   */
  time: string;


  //count: number;

  /**
   *考试题目列表
   */
  questions: CategoryOptions[];

  constructor(obj) {
    this.guid = obj.guid;
    this.name = obj.name;
    this.time = obj.time;
    this.questions = obj.questions && obj.questions.length ? obj.questions.map(q => {
      return new CategoryOptions(q);
    }) : [];
  }

  /**
   *考试题目计数
   */
  get count(): number {
    return this.questions ? this.questions.length : 0;
  }

  remove(i: number) {
    this.questions && this.questions[i] && this.questions.splice(i, 1);
    return this.questions.length;
  }
}
/**
 *错题分析
 */
export class EnalyzingOptions {

  /**
   *状态
   */
  state: any;

  /**
   *考试列表
   */
  exams: ExamOptions[];

  // /**
  //  *科目名称
  //  */
  // subjectName: string;

  /**
   *是否结束
   */
  end: boolean;


  // /**
  //  *月份计数
  //  */
  // month: number = 0;

  /**
   *考试总数
   */
  total: number;

  /**
   *未购数
   */
  unauthorized: number;

  /**
   *page
   */
  page: { index: number, noindex: number, viewLength: number };


  /**
   *条件筛选
   */
  option: EOptions;

  constructor(obj ? , opt ? : any) {
    if (!obj || !obj.exams.length) {
      this.state = null;
      return;
    }
    this.state = true;
    this.total = obj.total;
    this.unauthorized = obj.count;
    this.option = new EOptions(opt);
    this.append(obj);
  }

  /**
   *考试列表追加
   */
  append(obj, month ? : number) {

    this.exams = this.exams || [];
    this.option.month = month || this.option.month;
    this.page = { index: obj.index || 0, noindex: obj.noinedx || 0, viewLength: 5 };
    this.end = obj.isend;
    this.exams = this.exams.concat(obj.exams.map(item => {
      return new ExamOptions(item);
    }));

  }


  /**
   * 移除题目
   * @param eIndex 考试索引
   * @param qIndex 题目索引
   * @return 考试列表长度
   */
  remove(eIndex: number = 0, qIndex: number = 0) {
    if (this.exams && this.exams[eIndex]) {
      if (!this.exams[eIndex].remove(qIndex)) {
        this.exams.slice(eIndex, 1)
      }
    }
    //this.exams && this.exams[eIndex] && this.exams[eIndex].remove(qIndex) || this.exams.slice(eIndex, 1);
    this.state = !!this.exams.length;
    return this.exams.length;
  }

  get params() {
    return Object.assign({}, this.page, this.option);
  }


}
