// import { Component,ViewChild ,Renderer2,ElementRef} from '@angular/core';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, Slides } from 'ionic-angular';
/**
 * Generated class for the ExammodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exammodal',
  templateUrl: 'exammodal.html',
})
export class ExammodalPage {
  @ViewChild(Slides) slides: Slides;
  // imgurl: any;
  // num: any;
  name: string;
  options: any;
  colourno: boolean = false;
  colouryes: boolean = false;
  currentIndex: number;

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    public viewCtrl: ViewController,
  ) {}

  ngOnInit() {
    // this.imgurl = this.params.get('imgurl');
    // this.num = this.params.get('num');
    // this.name = this.params.get('name');
    this.options = this.params.get('papers') || [];
    this.name = this.params.get('name');
  };

  slideChanged() {
    this.currentIndex = this.slides.getActiveIndex();
  };

  confirm() {
    let index = this.currentIndex ? this.currentIndex : 0;
    this.viewCtrl.dismiss(this.options[index]);
  }

}
