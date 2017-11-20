export class Score {

  constructor(argument) {
    // code...
  }

  /**
   *科目名称
   */
  name: string;

  /**
   *比例
   */
  percent: any;

  /**
   *排名
   */
  rank: number

  /**
   *详细成绩
   */
  subjects: string[];
}

/**
 *学情报告
 */
export class ReportOptions {

  /**
   *领先比例
   */
  percent: any;

  /**
   *考试分类，1:本班，2:校级，3:联考;
   */
  level: number;

  /**
   *考生数
   */
  studentCount: number;

  /**
   *得分列表
   */
  scores: Score[];

  /**
   *得分列表
   */
  fields: string[];

  /**
   *层析分析
   */
  levelanalysis: any;

  /**
   *学情分析
   */
  learnanalysis: any;

  /**
   *排名对比
   */
  comranks: any[];

  /**
   *排名趋势
   */
  ranktrends: any[];

  /**
   *成绩趋势
   */
  scoretrends ? : any[];

  /**
   *当前活动成绩趋势索引
   */
  ranktrendsIndex: number = 0;

  /**
   *当前活动成绩趋势索引
   */
  scoretrendsIndex: number = 0;


  /**
   *当前活动排名对比索引
   */
  comranksIndex: number = 0;

  /**
   *科目列表
   */
  subjects: string[];

  /**
   *成绩趋势科目列表,无总分
   */
  scoreSubjects: string[];

  constructor(obj: any = { percent: 0, level: 1, studentCount: 1, scores: [], levelanalysis: null, learnanalysis: null }) {
    this.level = obj.level;
    this.studentCount = obj.studentCount;
    this.scores = obj.scores;
    this.fields = obj.fields;
    this.learnanalysis = obj.learnanalysis;
    this.levelanalysis = obj.levelanalysis;
    this.comranks = obj.comranks || [];
    this.ranktrends = obj.ranktrends || [];
    this.scoretrends = obj.scoretrends || [];
    this.subjects = this.getSubjects();
    this.scoreSubjects = this.subjects.filter(item => { return item != '总分' });
  }

  /**
   *活动排名趋势
   */
  get activityRanktrends() {
    return this.level !== 3 ? this.ranktrends[this.ranktrendsIndex] : null;
  }
  set activityRanktrends(val) {
    this.ranktrends[this.ranktrendsIndex] = val;
  }

  /**
   *活动成绩趋势
   */
  get activityScoretrends() {
    return this.scoretrends[this.scoretrendsIndex];
  }
  set activityScoretrends(val) {
    this.scoretrends[this.scoretrendsIndex] = val;
  }

  /**
   *活动排名对比
   */
  get activityComranks(): any[] {
    return this.comranks[this.comranksIndex];
  }
  set activityComranks(val) {
    this.comranks[this.comranksIndex] = val;
  }

  private getSubjects() {
    return this.scores.map(item => {
      return item.name;
    }); //.filter((item, index) => { return index > 0 });
  }
}

export const ReportCategory = [{
  name: "本班",
  code: 1
}, {
  name: "校级",
  code: 2
}, {
  name: "联考",
  code: 3
}]
