import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import Swiper from 'swiper';
window['Swiper'] = Swiper;
/**
 * Generated class for the PhotosviewerComponent component.
 * Add by leo zhang 201710010101
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'photosviewer',
  templateUrl: 'photosviewer.html'
})
export class PhotosviewerComponent {
  swiper: any;
  urls: any[] = [];
  states: number[] = [];
  title: any;
  constructor(
    navParams: NavParams,
    private viewCtrl: ViewController) {
    console.log('Hello PhotosviewerComponent Component');
    this.title = navParams.get('title');
    let images = navParams.get('images') || [];
    images = typeof images === "string" ? [images] : images;
    images.forEach(item => {
      let us = typeof item === "string" ? [item] : item.link || item.value;
      this.urls = this.urls.concat(us.map(item => {
        return { url: item, isImg: item.indexOf('http://') > -1 || item.indexOf('https://') > -1 }
      }));
    });
  }
  ngAfterViewInit() {
    this.swiper = new Swiper('#swiper-container', {
      zoom: true,
      pagination: {
        el: '#swiper-pagination',
      },
      passiveListeners: false,
      on: {
        slideChange: () => {
          this.states[this.swiper.activeIndex] === 1 ? this.swiper.zoom.enable() : this.swiper.zoom.disable()
        },
      }
    })
    this.states[0] !== 1 || this.swiper.zoom.disable();
  }
  load(index) {
    this.states[index] = 1;
    this.swiper.zoom.enable();
  }
}
