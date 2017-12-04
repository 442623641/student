import { Component, EventEmitter, Output, NgZone } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActionSheet, ActionSheetOptions, } from '@ionic-native/action-sheet';


/**
 * Generated class for the UploadimgComponent component.
 * Add by leo zhang 201710010101
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'uploadimg',
  templateUrl: 'uploadimg.html',
})
export class UploadimgComponent {
  items: string[] = [];
  urls: SafeResourceUrl[] = [];
  @Output() onChanged: EventEmitter < any > = new EventEmitter < any > ();
  constructor(
    private actionSheet: ActionSheet,
    private sanitizer: DomSanitizer,
    private zone: NgZone
  ) {}

  picker() {
    if (this.items.length > 3) return;
    let options: ActionSheetOptions = {
      // title: '',
      // subtitle: '',
      buttonLabels: ['拍照', '从手机相册选择'],
      addCancelButtonWithLabel: '取消',
      //androidTheme: this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,
      destructiveButtonLast: true
    };

    this.actionSheet.show(options).then((buttonIndex: number) => {
      console.log('Button pressed: ' + buttonIndex);
      this.openCamera(buttonIndex);
    });

  }
  remove(i) {
    this.urls.splice(i, 1);
    this.items.splice(i, 1);
    this.onChanged.emit(this.items);
  }


  /**
   * 打开摄像头
   */
  private openCamera(sourceType) {
    //let options = {
    //allowEdit: false,
    //quality: 50, //相片质量 0 -100
    //saveToPhotoAlbum: true, //是否保存到相册
    //  sourceType: sourceType, //是打开相机拍照还是打开相册选择 0 PHOTOLIBRARY :, 相册选择, 1 CAMERA : 拍照,SAVEDPHOTOALBUM : 2
    //}
    navigator['camera'].getPicture(res => {
      console.log(res);
      this.add(res);
    }, (err) => {
      console.log(err);
    }, { sourceType: sourceType });
  }

  private add(item) {
    if (!item) return;
    this.zone.run(() => this.urls.push(this.sanitizer.bypassSecurityTrustResourceUrl(item)));
    this.items.push(item);
    this.onChanged.emit(this.items);
  }
}
