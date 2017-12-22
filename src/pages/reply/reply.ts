import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, Slides } from 'ionic-angular';
import { DoctorProvider } from '../../providers/doctor/doctor';
import { Subjecte } from '../../model/subjecte';
import { REPORT_PAGE, PACKAGE_PAGE } from '../pages.constants';
/**
 * Generated class for the ReplyPage page.
 * Add by leo zhang 201711010101
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reply',
  templateUrl: 'reply.html',
})
export class ReplyPage {
  pages: any = {
    report: REPORT_PAGE,
    package: PACKAGE_PAGE,
  }
  @ViewChild('content') content: Content;
  @ViewChild('subjectSlider') subjectSlider: Slides;
  @ViewChild('subjectCard') subjectCard: any;
  lantern: boolean;
  showNavButton: boolean;
  subjects: Subjecte[];
  subjectIndex: number = 0;

  exam: any = {};
  balls: string[] = [];

  /**
   *是否固定小题详细头部
   */
  stickTopicHeader: boolean;
  scrolllProcessing: boolean;
  scrollTimer: any;
  affixH: number;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public doctorPro: DoctorProvider,
    public zone: NgZone,
  ) {}

  ngOnInit() {
    this.exam = this.navParams.data;
    //this.subjectSlider.autoHeight = true;
  }

  ionViewDidLoad() {
    this.showNavButton = this.navCtrl.getPrevious().id != REPORT_PAGE;
    setTimeout(() => {
      //this.lantern = true;
      this.doctorPro.subject({ guid: this.exam.guid }).then(res => {
        if (!res || !res.subjects || !res.subjects.length) {
          this.subjects = null;
          this.lantern = true;
          return;
        }
        this.subjects = [];
        this.balls = res.subjects;
        this.fill(res.subject, res.subjects[this.subjectIndex]);
        setTimeout(() => this.balls.length > 1 && this.content.resize(), 120);
      }).catch(ex => {
        this.subjects = null;
        this.lantern = true;
      });
    }, 450);
  }

  onSlideChanged(slider) {
    //重置滑动队列
    if (slider._activeIndex >= this.balls.length || slider._activeIndex < 0) {
      return;
    }

    this.subjectIndex = slider.getActiveIndex();
    //第一次加载
    this.getSubject(this.balls[this.subjectIndex]);
    console.log(this.subject);

  }

  /**
   *获取科目信息
   */
  getSubject(name: string) {
    this.subjects[this.subjectIndex] === undefined &&
      this.doctorPro.subject({ guid: this.exam.guid, subject: name })
      .then(res => {
        if (!res || !res.subject) return this.subject = null;
        this.fill(res.subject, name);
      }).catch(ex => {
        this.subject = null;
      })
  }

  fill(subject: any, name: string) {
    this.subject = new Subjecte(name, subject);
    setTimeout(() => this.affixH = this.subjectCard.nativeElement.offsetHeight, 60);
    this.topic(this.subject.categoryIndex);

  }

  /**
   *小题答题情况
   */
  topic(index) {
    this.subject.categoryIndex = index;
    if (this.subject.activity && this.subject.activity.fullString || this.subject.activity.fullString === null) {
      return;
    }
    this.doctorPro.topic({ guid: this.exam.guid, subject: this.subject.name, th: this.subject.activity.name }).then(res => {
      if (!res || !res.question) return;
      this.subject.activity.merge(res.question);
    }).catch((ex) => {
      console.log(ex);
      //this.subject.activity = null;
    });
  }

  /**
   *当前活动科目
   */
  get subject(): Subjecte {
    return this.subjects[this.subjectIndex];
  }

  set subject(val: Subjecte) {
    this.subjects[this.subjectIndex] = val;
  }


  /**
   *头部滚动处理
   */
  scrollHandler(event) {
    if (this.scrolllProcessing || this.lantern) return;
    let show = event.scrollTop > this.affixH;
    if (show == this.stickTopicHeader) return;
    clearTimeout(this.scrollTimer);
    this.scrolllProcessing = true;
    this.scrollTimer = setTimeout(() => this.scrolllProcessing = false, 250);
    this.zone.run(() => this.stickTopicHeader = show);
  }
  closeLantern() {
    this.lantern = false;
  }
}
