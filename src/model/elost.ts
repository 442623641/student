export class Elost {
  name: string;
  count: number;
  exams: LostOptions[] = [];
  state: any;
  index: number = 0;
  /**
   *错题本类型，0:纸质版，1:电子版
   */
  type: 0 | 1;

  /**
   *考试列表是否已结束
   */
  end: boolean;

  /**
   *金额
   */
  money: number = 0;
  /**
   *推荐题
   */
  promote: number;
  /**
   *是否需要推荐题
   */
  isPromote: 0 | 1;
  pagenum: number = 0;

  /**
   *是否进程中
   */
  processing: boolean;


  constructor(obj) {

    this.pagenum = obj.pagenum;
    this.isPromote = obj.isPromote;
    this.promote = obj.promote;
    this.processing = obj.processing;
    this.money = obj.money;

    this.state = obj.state;
    //this.index = obj.index;
    this.name = obj.name;
    this.count = obj.count;
    this.type = obj.type === undefined ? 1 : obj.type;
    obj.exams && obj.exams.length && this.append(obj.exams, obj.end, obj.index);
    //this.unend = obj.unend === undefined ? true : this.unend;
    //this.end = obj.end;

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
  append(exams, end, index ? ) {
    if (!exams || !exams.length) return;
    this.exams = this.exams.concat(exams.map(item => { return new LostOptions(item) }));
    this.state = !!this.exams.length;
    this.end = end;
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

export class LostOptions {
  day: number;
  guid: string;
  name: string;
  pcount: number
  qcount: number
  score: number
  timekey ? : any;
  checked ? : boolean;
  studentcode ? : string;

  constructor(obj) {
    this.name = obj.name;
    this.day = obj.day;
    this.guid = obj.guid;
    this.pcount = obj.pcount;
    this.qcount = obj.qcount;
    this.score = obj.score;
    obj.timekey && (this.timekey = obj.timekey);
    this.checked = obj.checked;
    obj.studentcode && (this.studentcode = obj.studentcode);
  }
}

export class LostParams {
  readonly ordertype ? : string = 'errorbook';
  exams: {
    name: string,
    count: number,
    promote: number,
    examguids: string
  }[];

  /**
   *收货地址
   */
  area: {
    /**
     *收货人姓名
     */
    name: string,

    /**
     *收货人电话
     */
    tel: string,

    /**
     *收货人区域
     */
    area: string,

    /**
     *详细地址
     */
    address ? : string
  } = { name: '', tel: '', area: '', address: '' };
  couponcode ? : string;

  /**
   *支付金额
   */
  amount ? : number;

  constructor(obj: Elost[], amount: number) {
    // code...
    this.amount = amount;
    this.exams = obj.map(item => {
      return {
        money: item.money,
        name: item.name,
        count: item.pagenum,
        promote: item.isPromote,
        examguids: item.exams.map(item => { return item.guid }).join(',')
      }
    });

  }
}
