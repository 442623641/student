export class ExcellentOptions {
  answer: any[];

  count: number;

  excellent: any[];

  guid: string;

  objective: boolean;

  paper: any[];

  percent: number

  total: number;

  constructor(obj) {
    this.objective = obj.objective;
    this.answer = obj.answer || [];
    this.excellent = obj.excellent || [];
    this.guid = obj.guid;
    this.paper = obj.paper || [];
    this.total = obj.total || 0;
    this.percent = obj.percent || 0;
    this.count = obj.count || 0;
  }

  get answerString() {
    return this.answer.join(",");
  }

}


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
  grade: number;

  constructor(obj) {
    this.subject = obj.subject;
    this.grade = obj.grade || 0;

  }

  clone() {
    return new EOptions(this);
  }
}
