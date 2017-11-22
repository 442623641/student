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
  lantern: boolean = true;
  showNavButton: boolean;
  subjects: Subjecte[] = [];
  subjectIndex: number = 0;

  exam: any = {};
  balls: string[] = [];

  affixH: number;


  /**
   *是否固定小题详细头部
   */
  stickTopicHeader: boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public doctorPro: DoctorProvider,
    public zone: NgZone
  ) {}

  ngOnInit() {
    this.exam = this.navParams.data;
    //this.subjectSlider.autoHeight = true;
  }

  ngAfterViewInit() {
    this.showNavButton = this.navCtrl.getPrevious().id != REPORT_PAGE;
    this.doctorPro.subject({ guid: this.exam.guid }).then(res => {
      this.balls = res.subjects;
      this.tucker(res.subject, res.subjects[this.subjectIndex]);
      console.log(res);
    });
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
    this.subjects[this.subjectIndex] ||
      this.doctorPro.subject({ guid: this.exam.guid, subject: name }).then(res => this.tucker(res.subject, name));
  }

  tucker(subject: any, name: string) {

    this.subject = new Subjecte(name, subject);
    if (this.balls.length > 1) {
      setTimeout(() => {
        this.subjectSlider.resize();
        this.content.resize();
        this.affixH = this.subjectSlider.container.offsetHeight;
      }, 60);
    } else {
      setTimeout(() => {
        this.affixH = this.subjectCard.nativeElement.offsetHeight;
      }, 60);
    }

    this.topic(this.subject.categoryIndex);

  }

  /**
   *小题答题情况
   */
  topic(index) {
    this.subject.categoryIndex = index;
    if (this.subject.activity.fullString) {
      return;
    }
    this.doctorPro.topic({ guid: this.exam.guid, subject: this.subject.name, th: this.subject.activity.name }).then(res => {
      if (!res || !res.question) {
        this.subject.activity = null;
        return;
      };
      this.subject.activity.merge(res.question);
    }).catch((ex) => {
      console.log(ex);
      this.subject.activity = null;
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

  scrollHandler(event) {
    if (this.lantern) return;
    this.zone.run(() => {
      this.stickTopicHeader = event.scrollTop > this.affixH;
    });
  }


}