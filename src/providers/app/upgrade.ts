import { HttpProvider } from "../http";
import { Injectable } from '@angular/core';
import { NativeProvider } from '../native';
import { Application } from '../../model/application';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { Platform } from 'ionic-angular';
/*
  Generated class for the AppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UpgradeProvider {
  localVersion: string;
  remoteVersion: string;
  updating: boolean;
  constructor(
    platform: Platform,
    private http: HttpProvider,
    private nativePro: NativeProvider,
    private file: File,
    private fileOpener: FileOpener,
  ) {
    console.log('Hello UpgradeProvider Provider');
  }

  checkUpdate(version ? : string): Promise < any > {
    this.localVersion = version || this.localVersion;
    return this.preferences().then((remote: Application) => {
      if (!remote) { return !!remote; }
      this.remoteVersion = remote.version;
      if (remote.version != this.localVersion) {
        let fileName = `septnet.student@${remote.version}.apk`;
        this.file.checkFile(this.file.externalCacheDirectory, fileName).then(exist => {
          this.dialog(remote, fileName, exist);
        }).catch(ex => {
          console.log(ex);
          this.dialog(remote, fileName);
        })
      }
      return remote.version != this.localVersion;
    }).catch(ex => {
      return Promise.resolve(false);
    })
  }

  dialog(remote: Application, fileName, exist ? ) {
    let callback = btn => {
      if (this.nativePro.isIos()) {
        window.location.href = remote.url;
      } else {
        btn && (exist ? this.install(fileName) : this.download(remote.url, fileName));
      }
    }

    remote.strict ?
      this.nativePro.alert(remote.memo, exist ? '立即安装' : '立即更新', '发现新版本').then(res => callback(res)) :
      this.nativePro.confirm(remote.memo, ['稍后再说', exist ? '立即安装' : '立即更新'], '发现新版本', true)
      .then(btn => callback(btn));
  }

  /*
   *下载
   */
  private download(url, fileName) {
    this.updating = true;
    let tip = this.nativePro.tip('正在下载安装包...');
    this.http.downloadFile(url, this.file.externalCacheDirectory + fileName)
      .then((entry) => {
        this.updating = false;
        tip.dismiss();
        this.install(fileName);
      }).catch(ex => {
        this.updating = false;
        tip.dismiss();
        console.log(ex);
      })
  }

  /*
   *安装app
   */
  private install(fileName, shouldDelete ? : boolean) {
    this.fileOpener.open(this.file.externalCacheDirectory + fileName, 'application/vnd.android.package-archive')
      .then(() => console.log('File is opened'))
      .catch(e => {
        console.log('Error openening file', e);
        this.nativePro.confirm('安装失败，请手动安装', ['稍后再试', '手动安装']).then(res => {
          this.file.removeFile(this.file.externalCacheDirectory, fileName).catch(ex => {});
          shouldDelete ? this.checkUpdate() : this.install(fileName, true)
        })
      });
  }

  /*
   *应用配置信息
   */
  preferences() {
    return this.http.get('index/getAppVersion');
  }
}
