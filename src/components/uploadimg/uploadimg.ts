import { Component, EventEmitter, Output, NgZone } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { normalizeURL } from 'ionic-angular';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';
import { NativeProvider } from '../../providers/native';
import { Camera } from '@ionic-native/camera';
import { FilePath } from '@ionic-native/file-path';
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
    private zone: NgZone,
    private nativePro: NativeProvider,
    private camera: Camera,
    private filePath: FilePath,
  ) {}

  picker() {
    if (this.items.length > 3) return;
    let options: ActionSheetOptions = {
      buttonLabels: ['拍照', '从手机相册选择'],
      addCancelButtonWithLabel: '取消',
      androidTheme: this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,
      destructiveButtonLast: true
    };

    this.actionSheet.show(options).then((buttonIndex: number) => {
      console.log('Button pressed: ' + buttonIndex);
      this.openCamera(buttonIndex);
    });

  }
  remove(i) {
    this.zone.run(() => this.urls.splice(i, 1));
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
    this.camera.getPicture({ sourceType: sourceType }).then(res => {
      console.log(res);
      if (this.items.indexOf(res) > -1) return this.nativePro.toast('改图片已经存在');
      this.add(res);
    }).catch((err) => {
      console.log(err);
    })
  }

  private add(item) {
    if (!item) return;
    let add = (path) => {
      this.items.push(path);
      this.onChanged.emit(this.items);
    }
    this.zone.run(() => this.urls = this.urls.concat([this.sanitizer.bypassSecurityTrustResourceUrl(item)]));

    this.nativePro.isAndroid() ? this.filePath.resolveNativePath(item).then(path => {
      add(path)
    }).catch(ex => {
      console.log(ex);
    }) : add(normalizeURL(item));
  }
}
