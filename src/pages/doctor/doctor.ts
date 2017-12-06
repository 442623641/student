import { Component, ViewChild, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, Slides, ModalController } from 'ionic-angular';
import { DoctorProvider } from '../../providers/doctor/doctor';
import { ChartsProvider } from '../../providers/charts/charts';
// import { TopicsPage } from '../topics/topics';
import { Subjecte } from '../../model/subjecte';
import { REPORT_PAGE, TOPICS_PAGE } from '../pages.constants';
/**
 * Generated class for the DoctorPage page.
 * Add by Leo Zhang
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor',
  templateUrl: 'doctor.html',
})
export class DoctorPage {
  pages: any = {
    report: REPORT_PAGE
  }

  @ViewChild('content') content: Content;
  @ViewChild('subjectSlider') subjectSlider: Slides;
  //@ViewChild('segmentSlider') segmentSlider: Slides;
  // @ViewChild('topicSlider') topicSlider: Slides;
  //@ViewChild('percentsElement') percentsElement: any;

  showNavButton: boolean;
  subjects: Subjecte[] = [];
  subjectIndex: number = 0;

  exam: any = {};
  percents: any;
  balls: string[] = [];

  swinged: boolean;

  /**
   *是否固定小题详细头部
   */
  stickTopicHeader: boolean;

  /**
   *滚动timer
   */
  scrollYStart: number;
  scrollTimer: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public doctorPro: DoctorProvider,
    public chartsPro: ChartsProvider,
    public modalCtrl: ModalController,
    public zone: NgZone) {}

  ngOnInit() {
    this.exam = this.navParams.data;
  }

  ionViewDidLoad() {
    setTimeout(() => {
      this.showNavButton = this.navCtrl.getPrevious().id != REPORT_PAGE;
      this.doctorPro.subject({ guid: this.exam.guid }).then(res => {
        if (!res || !res.subject || !res.subject.no || !res.subject.no.length) return this.subject = null;
        this.balls = res.subjects;
        this.fill(res.subject, res.subjects[this.subjectIndex]);
        console.log(res);
        console.log(this.subjectSlider);
      }).catch(ex => {
        console.error(ex);
        this.subject = null;
      });
    }, 350);
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
      this.doctorPro.subject({ guid: this.exam.guid, subject: name })
      .then(res => this.fill(res.subject, name))
      .catch(ex => console.error(ex));
  }

  fill(subject: any, name: string) {


    this.subject = new Subjecte(name, subject,
      subject.no ? this.chartsPro.percents(
        subject.no.filter((item, index) => {
          return index < 4
        }),
        subject.series.map(items => {
          return items.filter((item, index) => { return index < 4 });
        })) : null);

    setTimeout(() => {
      this.subjectSlider.resize();
      this.content.resize();
    }, 60);

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
      this.subject.activity.merge(res.question);
    }).catch(ex => {
      console.error(ex);
    });
  }

  /**
   *切换优秀答题
   */
  excellent(index: number = 0) {
    // let topics = this.subject.activity;
    let exc = this.subject.activity.excellent[index];
    if (exc.value.length > 1) {
      this.subject.activity.nextExcellent(index);
      return;
    }

    this.doctorPro.excellent({ guid: this.exam.guid, subject: this.subject.name, nos: [exc.no] }).then(res => {
      if (res.length) {
        this.subject.activity.setExcellents(res);
        this.subject.activity.nextExcellent(index);
      }
    }).catch(ex => {
      console.error(ex);
    });
  }

  /**
   *查看更多哦小题得分情况
   */
  openPercentModal() {
    let modal = this.modalCtrl.create(TOPICS_PAGE, { options: this.chartsPro.percents(this.subject.no, this.subject.series) }, { enterAnimation: 'modal-md-slide-in', leaveAnimation: 'modal-md-slide-out' });
    modal.present();
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
    this.zone.run(() => {
      this.stickTopicHeader = event.scrollTop > this.subjectSlider.container.offsetHeight;
    });
  }



}
