import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import Swiper from 'swiper/dist/js/swiper.js';
//window['Swiper'] = Swiper;
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
      let us = this.toArray(typeof item === "string" ? item : item.link || item.value);
      this.urls = us.length ? this.urls.concat(us.map(item => {
        return { url: item, isImg: item.indexOf('http://') > -1 || item.indexOf('https://') > -1 }
      })) : this.urls;
    });
  }
  toArray(obj) {
    if (!obj) return [];
    return typeof obj === "string" ? [obj] : obj;
  }
  ngAfterViewInit() {
    this.swiper = new Swiper('#swiper-container', {
      zoom: true,
      pagination: {
        el: '#swiper-pagination',
        type: 'fraction'
      },
      slideToClickedSlide: false,
      passiveListeners: false,
      on: {
        click: () => this.swiper.zoom.scale != 1 ? this.swiper.zoom.toggle() : this.viewCtrl.dismiss(),
        slideChange: () => {
          this.swiper.zoom.disable();
          setTimeout(() => {
            this.swiper.virtual.update();
            this.swiper.zoom.enable();
            this.swiper.update();
            this.swiper.detachEvents(); //移除所有slide监听事件
            this.swiper.attachEvents(); //重新绑定所有监听事件。
          }, 120);
          //this.states[this.swiper.activeIndex] !== 1 ? this.swiper.zoom.disable() : this.swiper.zoom.enable();
        }
      },
      virtual: {
        cache: false,
        slides: this.urls,
        renderSlide: function(slide, index) {
          return `<div class="swiper-slide">
                      <div class="swiper-zoom-container">` +
            (slide.isImg ? `<img src="${slide.url}" onerror="this.src='assets/images/default.png'">` :
              `<span style="color:white">${slide.url}</span>`) +
            `</div></div>`;
        },
      },
    })
    // this.states[0] !== 1 || this.swiper.zoom.disable();
  }
  load(index) {
    this.states[index] = 1;
    this.swiper.zoom.enable();
  }
}
