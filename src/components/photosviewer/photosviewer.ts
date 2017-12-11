import { Component, ViewChild } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
// import { NativeProvider } from '../../providers/native';
/**
 * Generated class for the PhotosviewerComponent component.
 * Add by leo zhang 201710010101
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'photosviewer',
  templateUrl: 'photosviewer.html'
})
export class PhotosviewerComponent {
  urls: any[] = [];
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
      this.urls = this.urls.concat(us);
    });
    // if (!this.urls) {
    //   this.nativePro.toast('图片不存在')
    // }
    //console.log(this.urls);
  }





}
