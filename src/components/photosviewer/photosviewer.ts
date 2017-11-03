import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
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
  images: string[] = [];
  title: any;
  constructor(public navParams: NavParams,
    public viewCtrl: ViewController) {
    console.log('Hello PhotosviewerComponent Component');
  }

  ngOnInit() {
    this.title = this.navParams.get('title');
    this.images = this.navParams.get('images');
  }

  ngAfterViewInit() {

  }

}
