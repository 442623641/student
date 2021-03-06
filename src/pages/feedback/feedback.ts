import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';
import { NativeProvider } from "../../providers/native";
/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
  text: string;
  images: string[] = [];
  processing: boolean;
  constructor(
    private navCtrl: NavController,
    private appPro: AppProvider,
    private nativepro: NativeProvider,
    //private filePath: FilePath
  ) {}
  onChanged(event) {
    this.images = event || [];
    this.processing = (!!this.images.length || !!this.text) ? false : undefined;
  }

  submit() {
    this.processing = true;
    let sucess = () => {
      this.nativepro.success('感谢您的反馈');
      setTimeout(() => {
        this.processing = false;
        this.navCtrl.pop()
      }, 800);
    }
    let guid: string = '';
    if (!this.images.length) {
      return this.appPro.feedback({ desc: this.text, guid: guid })
        .then(res => sucess())
        .catch(ex => this.nativepro.toast(ex.message))
    }
    this.images.forEach((item, index) => {

      this.appPro.feedback({ desc: this.text, guid: guid }, item)
        .then(res => {
          if (!res || !res.guid) return;
          guid = res.guid;
          index == this.images.length - 1 && sucess()
        })
        .catch(err => {
          this.processing = false;
          this.nativepro.toast(err.message);
          console.log(err);
        });
    })
  }

}
