export class Elost {
  name: string;
  count: string;
  exams: ElostOptions[] = [];
  state: any;
  index: number = 0;
  end: boolean;
  visible: boolean;

  constructor(obj) {

    this.name = obj.name;
    this.count = obj.count;
    obj.exams && obj.exams.length && this.append(obj.exams, obj.end, obj.index);
  }

  /**
   *已订购考试总数
   */
  get echeckeds(): number {
    return this.exams.filter(item => { return item.checked }).length;
  }

  /**
   *已订购题目总数
   *
   */
  get icheckeds(): number {
    let count = 0;
    this.exams.forEach(item => {
      item.checked && (count += item.qcount);
    });
    return count;
  }


  /**
   *追加考试列表
   *@param exams 考试列表
   *@param end 是否已结束
   *@param index 考试索引
   */
  append(exams, end ? , index ? ) {
    if (!exams || !exams.length) return;
    this.exams = this.exams.concat(exams.map(item => { return new ElostOptions(item) }));
    this.state = !!this.exams.length;
    this.end = end || this.end;
    this.index = index || this.index;

  }


  /**
   *设置全选
   */
  set checkedAll(val) {
    this.exams.map(item => {
      item.checked = val;
      return item;
    });
  }

  /**
   *科目列表
   */
  subjects() {}
}

export class ElostOptions {
  day: number;
  guid: string;
  name: string;
  pcount: number
  qcount: number
  score: number
  timekey ? : string;
  checked ? : boolean;

  constructor(obj) {
    this.name = obj.name;
    this.day = obj.day;
    this.guid = obj.guid;
    this.pcount = obj.pcount;
    this.qcount = obj.qcount;
    this.score = obj.score;
    this.timekey = obj.timekey;
    this.checked = obj.checked;
  }



}
