import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Slides } from 'ionic-angular';

/**
 * Generated class for the ClaimmodalPage page.
 * Add by leo zhang 201711010101
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-claimmodal',
  templateUrl: 'claimmodal.html',
})
export class ClaimmodalPage {
  @ViewChild(Slides) slides: Slides;
  name: string;
  options: any;
  currentIndex: number = 0;
  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public viewCtrl: ViewController,
  ) {
    console.log('ionViewDidLoad ClaimmodalPage');
  }

  ngOnInit() {
    // this.imgurl = this.params.get('imgurl');
    // this.num = this.params.get('num');
    // this.name = this.params.get('name');
    this.options = this.params.get('papers') || [];
    this.name = this.params.get('name');
  };

  ionViewDidLoad() {
    setTimeout(() => {
      this.slides.lockSwipeToPrev(this.slides.isBeginning());
      this.slides.lockSwipeToNext(this.slides.isEnd());
    }, 500);
  }

  slideChanged(event: Slides) {
    event.lockSwipeToPrev(event.isBeginning());
    event.lockSwipeToNext(event.isEnd());
    this.currentIndex = event.getActiveIndex() || 0;
  };

  confirm() {
    //let index = this.currentIndex ? this.currentIndex : 0;
    this.options[this.currentIndex] && this.viewCtrl.dismiss(this.options[this.currentIndex]);
  }

}
