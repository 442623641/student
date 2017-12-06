import { Injectable } from '@angular/core';
import { Toast } from '@ionic-native/toast';
import { Dialogs } from '@ionic-native/dialogs';
import { ToastController, LoadingController, Platform, AlertController, ModalController } from 'ionic-angular';
import { PhotosviewerComponent } from '../components/photosviewer/photosviewer';
import { SpinnerDialog } from '@ionic-native/spinner-dialog';
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * added by 442623641@qq.com 201703161032.
 * 原生API
 */

@Injectable()
export class NativeProvider {
  private loadRunning: boolean = false;
  public native: boolean;
  private loading: any;
  private imageShowing: boolean;


  constructor(
    private platform: Platform,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private ntoast: Toast,
    private dialogs: Dialogs,
    private modalCtrl: ModalController,
    private spinnerDialog: SpinnerDialog,
    private socialSharing: SocialSharing
  ) {
    this.native = platform.is('mobile') && !platform.is('mobileweb');
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

  isIpad() {
    return this.isMobile() && this.platform.is('ipad');
  }

  /**
   * 统一调用此方法显示提示信息
   * @param message 信息内容
   * @param duration 显示时长
   */
  toast = (message: string = '操作完成', duration: number = 2000, positon: string = "top") => {
    if (this.native) {
      return this.ntoast.show(message, String(duration), positon).subscribe();
    } else {
      return this.toastCtrl.create({
        message: message,
        duration: duration,
        position: positon,
        showCloseButton: false,
      }).present();
    }
  };


  /**
   * 统一调用此方法显示提示信息
   * @param message 信息内容
   * @param duration 显示时长
   */
  prompt = (message: string = '操作完成', duration: number = 3000) => {
    if (this.native) {
      return this.ntoast.showWithOptions({
        message: message,
        position: 'center',
        duration: duration,
        addPixelsY: -10,
        styling: {
          //opacity: 1,
          //backgroundColor: '#f66e4f',
          //textColor: '#666666',
          cornerRadius: 14,
          horizontalPadding: 60,
          verticalPadding: 60,
        }
      }).subscribe()
      //return this.ntoast.show(message, String(duration), 'middle').subscribe();
    } else {
      return this.toast(message, duration, 'middle');
    }
  };

  /**
   * 对话框
   * @param msg 信息内容
   * @buttons 按钮
   * @return {Promise<T>}
   */
  confirm = (msg: string = "确定这样做？", btns: Array < string >= ["取消", "确认"]) => {
    if (this.native) {
      return this.isIos() ? this.dialogs.confirm("", msg, btns).then(btn => {
        return btn - 1
      }) : this.dialogs.confirm(msg, "", btns).then(btn => {
        return btn - 1
      });
    }
    return new Promise((resolve, reject) => {
      let confirm = this.alertCtrl.create({
        title: null,
        enableBackdropDismiss: false,
        subTitle: msg,
        buttons: [{
          text: btns[0],
          handler: () => {
            resolve(0);
          }
        }, {
          text: btns[1],
          handler: () => {
            resolve(1);
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
    if (this.native) {
      setTimeout(() => { //最长显示10秒
        this.loadRunning = false;
        this.spinnerDialog.hide();
      }, 10000);
      this.loadRunning = true;
      return this.spinnerDialog.show('', content, true);
    };
    if (!this.loadRunning) {
      this.loadRunning = true;
      this.loading = this.loadingCtrl.create({
        spinner: 'ios',
        content: content,
        showBackdrop: true,
        cssClass: "embedded",
        dismissOnPageChange: true,
        duration: 10000
      });
      this.loading.present();
      setTimeout(() => { //最长显示10秒
        this.loadRunning = false;
      }, 10000);
    }
  };

  /**
   * 关闭loading
   */
  hideLoading = () => {
    if (this.native) {
      this.loadRunning && this.spinnerDialog.hide();
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

}
