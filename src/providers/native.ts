import { Injectable } from '@angular/core';
import { Toast } from '@ionic-native/toast';
import { Dialogs } from '@ionic-native/dialogs';
import { ToastController, LoadingController, Platform, AlertController, ModalController } from 'ionic-angular';
import { PhotosviewerComponent } from '../components/photosviewer/photosviewer';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AppVersion } from '@ionic-native/app-version';
/* beautify ignore:start */
declare let ProgressIndicator: any;
/* beautify ignore:end */

/**
 * added by 442623641@qq.com 201703161032.
 * 原生API
 */

@Injectable()
export class NativeProvider {
  private loadRunning: boolean = false;
  public native: boolean;
  public loading: any;
  private imageShowing: boolean;


  constructor(
    public platform: Platform,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private ntoast: Toast,
    private dialogs: Dialogs,
    private modalCtrl: ModalController,
    private spinnerDialog: SpinnerDialog,
    private socialSharing: SocialSharing,
    private appVersion: AppVersion,
  ) {
    this.native = this.isMobile();
  }

  /**
   * 是否真机环境
   * @return {boolean}
   */
  isMobile() {
    return this.platform.is('mobile') && !this.platform.is('mobileweb');
  }

  /**
   * 是否android真机环境
   * @return {boolean}
   */
  isAndroid() {
    return this.isMobile() && this.platform.is('android');
  }

  /**
   * 是否ios真机环境
   * @return {boolean}
   */
  isIos() {
    return this.isMobile() && (this.platform.is('ios') || this.platform.is('ipad') || this.platform.is('iphone'));
  }


  /**
   * 统一调用此方法显示提示信息
   * @param message 信息内容
   * @param duration 显示时长
   */
  toast = (message: string = '操作完成', duration: number = 2000, positon: string = "top") => {
    if (this.native) {
      return this.ntoast
        .show(message, String(duration), positon)
        .subscribe(res => {
          console.log(res);
        });
    } else {
      return this.toastCtrl.create({
        message: message,
        duration: duration,
        position: positon,
        showCloseButton: false,
      }).present();
    }
  };

  tip(message: string = '操作完成', duration: number = 1000000) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: 'top',
      showCloseButton: true,
      closeButtonText: 'x',
      //cssClass: 'toast-tip',
      dismissOnPageChange: true,
    })
    toast.present();
    return toast;
    //return this.toast(message, duration, 'middle');
  }


  /**
   * 统一调用此方法显示提示信息
   * @param message 信息内容
   * @param duration 显示时长
   */
  success = (message: string = '操作完成', duration: number = 2000) => {
    if (this.isIos()) {
      ProgressIndicator.hide();
      ProgressIndicator.showSuccess(false, message);
      return new Promise(resolve => setTimeout(() => {
        ProgressIndicator.hide();
        resolve();
      }, duration));
    } else {
      this.toast(message, duration, 'center');
      return new Promise(resolve => setTimeout(() => resolve(), duration));
    }

  };

  /**
   * 对话框
   * @param msg 信息内容
   * @buttons 按钮
   * @return {Promise<T>}
   */
  confirm = (msg: string = "确定这样做？", btns: Array < string >= ["取消", "确认"], title: string = '', shouldTitle ? : boolean, shouldBackButtonIndex ? : boolean) => {
    if (this.native) {
      return this.isIos() ? this.dialogs.confirm(title ? msg : title, title ? title : msg, btns).then(btn => {
        console.log('clicked button index:' + btn);
        return shouldBackButtonIndex ? btn : Math.max(btn - 1, 0);
      }) : this.dialogs.confirm(msg, shouldTitle ? title : '', [btns[0], '', btns[1]]).then(btn => {
        console.log('clicked button index:' + btn);
        return shouldBackButtonIndex ? btn == 3 ? 2 : btn : Math.max(btn - 2, 0);
      });
    }
    return new Promise((resolve, reject) => {
      let confirm = this.alertCtrl.create({
        title: title,
        enableBackdropDismiss: false,
        subTitle: msg,
        buttons: [{
          text: btns[0],
          handler: () => {
            resolve(shouldBackButtonIndex ? 1 : 0);
          }
        }, {
          text: btns[1],
          handler: () => {
            resolve(shouldBackButtonIndex ? 2 : 1);
          }
        }]
      });
      confirm.present();
    });
  }

  /**
   * 对话框
   * @param msg 信息内容
   * @buttons 按钮
   * @return {Promise<T>}
   */
  alert = (msg: string = "确定这样做？", btn: string = "我知道了", title ? : string) => {
    title = title || '';
    if (this.native) {
      return title || !this.isIos() ? this.dialogs.alert(msg, title, btn) : this.dialogs.alert(title, msg, btn);
    }
    return new Promise((resolve, reject) => {
      let confirm = this.alertCtrl.create({
        title: title,
        enableBackdropDismiss: false,
        //message: msg,
        subTitle: msg,
        buttons: [{
          role: "cancel",
          text: btn,
          handler: () => {
            resolve(1);
          }
        }]
      });
      confirm.present();
    });
  }

  /**
   * 统一调用此方法显示loading
   * @param content 显示的内容
   */
  showLoading = (content: string = "加载中...") => {
    if (this.loadRunning) {
      return;
    }
    this.loadRunning = true;
    let progressCtrl: any;
    if (this.isAndroid()) {
      progressCtrl = this.spinnerDialog;
      this.spinnerDialog.hide();
      this.spinnerDialog.show('', content, true);
    } else if (this.isIos()) {
      progressCtrl = ProgressIndicator;
      ProgressIndicator.hide();
      ProgressIndicator.showSimpleWithLabel(false, content);
    } else {
      this.loading = this.loadingCtrl.create({
        spinner: 'ios',
        content: content,
        showBackdrop: true,
        cssClass: "embedded",
        dismissOnPageChange: true,
        duration: 60000
      });
      this.loading.present();
      setTimeout(() => { //最长显示10秒
        this.loadRunning = false;
      }, 60000);
    }
    setTimeout(() => { //最长显示10秒
      this.loadRunning = false;
      progressCtrl.hide();
    }, 60000);
  };

  /**
   * 关闭loading
   */
  hideLoading = () => {
    if (this.isAndroid()) {
      this.loadRunning && this.spinnerDialog.hide();
    } else if (this.isIos()) {
      ProgressIndicator.hide();
    } else {
      this.loadRunning && this.loading.dismiss();
    }
    this.loadRunning = false;
  };

  /**
   * 图片预览
   * @param url
   * @param title
   */
  showImage(urls: string[], title: string, orientation ? : string) {
    if (this.imageShowing) {
      return;
    }
    let url = '';
    if (this.native && urls.length === 1) {
      //无签名
      if (urls[0].indexOf('Signature') == -1) {
        url = encodeURI(urls[0]);
      } else {
        //b包含中文
        if (/[\u4E00-\u9FA5\uF900-\uFA2D]/.test(url)) {
          this.toast('图片非法');
          return;
        }
        let temps = (urls[0]).split('?');
        url = encodeURI(temps[0]) + (temps[1] ? ('?' + temps[1]) : '');
      }
      let options = { share: false };
      orientation && (options[orientation] = true);
      //this.photoViewer.show(url, title, options);
    } else {
      let modal = this.modalCtrl.create(PhotosviewerComponent, {
        photos: urls, //.map(item=>{return {url:item}}),
        title: title,
      });
      modal.present();
    }
    this.imageShowing = true;
    setTimeout(() => this.imageShowing = false, 2000);
  }


  /**
   * 分享到其他应用
   * @param url
   * @param message
   * @param file
   * @return {Promise<T>}
   */
  share(url: string = '', message: string = '', file: string | string[] = '') {
    return this.socialSharing.share(message, '', file, url);
  }


  /**
   * 版本号
   * @return {Promise<T>}
   */
  version() {
    if (this.native) {
      return this.appVersion.getVersionNumber();
    } else {
      return Promise.resolve('1.0.0');
    }
  }

}
