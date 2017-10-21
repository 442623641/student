/**
 *题目详细数据
 */
export class CategoryOptions {
  /**
   *原始卷
   */
  paper: string[];

  /**
   *知识点
   */
  topic: string;

  /**
   *解析
   */
  resolve: string[];

  /**
   *满分
   */
  full: number[];

  /**
   *我的得分
   */
  score: number[];

  /**
   *难度
   */
  level: number[];

  /**
   *我的答案
   */
  reply: any[];

  /**
   *正确答案
   */
  answer: any[];

  /**
   *分析
   */
  analyse ? : {
    /**
     *题号名称
     */
    no: string,

    /**
     *类别
     */
    category ? : string[],

    /**
     *xAxis
     */
    series ? : number[],

    /**
     *options
     */
    options ? : any;
  }[];

  /**
   *优秀答卷列表
   */
  excellent: any[];

  /**
   *优秀答卷索引列表
   */
  excellentNums: number[] = [0];

  /**
   *是否主观题
   */
  objective: boolean;

  constructor(obj: any = { paper: [], topic: '', excellent: [], answer: [], reply: [], resolve: [], full: [], score: [], level: [], objective: true }) {
    this.paper = obj.paper;
    this.topic = obj.topic;
    this.answer = obj.answer || [];
    this.reply = obj.reply || [];
    this.resolve = obj.resolve;
    this.full = obj.full || [];
    this.score = obj.score || [];
    this.level = obj.level || [];
    this.objective = obj.objective;


    this.excellent = obj.excellent || [];
    this.excellent.forEach((item, index) => this.excellentNums[index] = 0);

    this.analyse = obj.analyse || [];
  }



  nextExcellent(index = 0) {
    if (this.excellent[index].value.length > 1) {
      this.excellentNums[index] = this.excellentNums[index] < this.excellent[index].value.length - 1 ? this.excellentNums[index] + 1 : 0;
      return this.excellentNums[index];
    }
    return 0;

  }

  setExcellents(index: number = 0, items = []) {
    this.excellent[index].value = items;
  }


  get fullString() {
    return this.full.join(",");
  }
  get answerString() {
    return this.answer.join(",");
  }
  get replyString() {
    return this.reply.join(",");
  }

  get scoreString() {
    return this.score.join(",");
  }
  get levelString() {
    return this.level.join(",");
  }

}

/**
 *题目信息
 */
export class Category extends CategoryOptions {
  /**
   *题号编号
   */
  no: string;

  /**
   *题号名称
   */
  name: string;

  /**
   *是否正确
   */
  right: boolean;



  /**
   *题目详细信息
   */
  //data ? : CategoryOptions;

  constructor(obj: any = { no: '', name: '', right: false }) {
    super();

    this.no = obj.no;
    this.name = obj.name;
    this.right = obj.right;

  }

  /**
   *追加合并信息
   */
  merge(obj: CategoryOptions) {

    if (!obj) return;

    obj.analyse = obj.analyse.map(item => {
      return { no: item.no, options: this.setOpt(item.category, item.series) };
    });
    Object.assign(this, new CategoryOptions(obj));
  }

  private setOpt(category, series) {
    return {
      color: ['#f66e4f', '#3398DB'],
      grid: {
        top: 16,
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        data: category,
        axisTick: {
          alignWithLabel: true
        }
      }],
      yAxis: [{
        axisTick: {
          alignWithLabel: true
        }
      }],
      series: [{
        type: 'bar',
        barWidth: '40%',
        data: series
      }, ],
      label: {
        normal: {
          show: true,
          position: 'top',
          formatter: '{c} 人'
        }
      }
    }
  }
}
/**
 *错题诊断 科目
 */
export class Subjecte {
  /**
   *原始答卷
   */
  paper: string;

  /**
   *题号列表
   */
  no: string[];

  /**
   *得分率列表
   */
  series: number[][];

  /**
   *题目列表
   */
  category: Category[] = [];

  /**
   *小题得分率
   */
  percents: any;

  /**
   *科目名称
   */
  name: string;

  /**
   *当前题号索引
   */
  categoryIndex: number = 0;

  /**
   *显示全部题目
   */
  showAll: boolean = false;

  constructor(name: string = '', obj: any = { paper: '', no: [], series: [], showAll: false, category: [] }, percents = {}) {
    this.name = name;

    this.percents = percents;

    this.paper = obj.paper;
    this.no = obj.no;
    this.series = obj.series;
    this.category = obj.category.map(item => { return new Category(item) });
    // code...
  }



  /**
   *当前活动题
   */
  get activity(): Category {
    return this.category[this.categoryIndex];
  }

  set activity(data: Category) {
    this.category[this.categoryIndex];
  }

  /**
   *题号列表
   */
  get nos(): string[] {
    return this.category.map(item => {
      return item.no;
    });
  }

}
