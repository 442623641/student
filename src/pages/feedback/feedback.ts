import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AppProvider } from '../../providers/app/app';
import { NativeProvider } from "../../providers/native";
import { FilePath } from '@ionic-native/file-path';
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
    private filePath: FilePath
  ) {}
  onChanged(event) {
    this.images = event || [];
    this.processing = (!!this.images.length || !!this.text) ? false : undefined;
  }

  submit() {
    let guid: string = '';
    this.images.forEach((item, index) => {
      this.filePath.resolveNativePath(item).then(path => {
        this.appPro.feedback({ desc: this.text, guid: guid }, path)
          .then(res => {
            if (!res || !res.guid) return;
            guid = res.guid;
            console.log(res);
            if (index == this.images.length - 1) {
              this.processing = false;
              this.nativepro.toast('感谢您的反馈');
              setTimeout(() => this.navCtrl.pop(), 800);
            }
          })
          .catch(err => {
            console.error(err);
            //this.nativepro.toast(err.message);
          });
      }).catch(err => console.error(err));
    })
  }

}
