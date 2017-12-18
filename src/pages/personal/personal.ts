import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { PersonalProvider } from '../../providers/personal/personal';
import { StaticProvider } from '../../providers/static/static';
import { UserInfo } from '../../model/userInfo';
import { UserProvider } from '../../providers/user';
import { NativeProvider } from '../../providers/native';
import { PERSONAL_PAGE, SCHOOLS_PAGE, TABS_PAGE, LOGIN_PAGE } from '../pages.constants'
//import { TabsPage } from '../../pages/tabs/tabs';
/**
 * Generated class for the PersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {
  @ViewChild('pickerCmp') pickerCmp: any;
  pages = { binding: PERSONAL_PAGE, schools: SCHOOLS_PAGE };
  picker: {
    city ? : any[],
    grade ? : any[],
    text: string
  }
  pickerName: string;
  userInfo: UserInfo;
  db: UserInfo;
  graduated: boolean;
  processing: any;
  refreshSub: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public staticPro: StaticProvider,
    public userPro: UserProvider,
    public personalPro: PersonalProvider,
    private nativePro: NativeProvider,
    private appCtrl: App
  ) {}

  ngOnInit() {

    this.initialize();
  }

  /**
   * 获取城市数据
   */
  initialize() {
    let pickerSource = () => Promise.all([this.staticPro.address(), this.staticPro.grade()]).then(res => {
      this.picker = {
        city: res[0],
        grade: res[1],
        text: ''
      };
    }).catch();

    this.personalPro.schoolChecked$.subscribe(res => {
      res = res || {};
      this.userInfo.school = res.name;
      this.userInfo.schoolGuid = res.guid;
    })

    this.userPro.getUserInfo().then(res => {
      this.userInfo = res || {};
      this.db = JSON.parse(JSON.stringify(this.userInfo));
      this.db.school ?
        this.userPro.userInfo().then((info) => {
          if (!info.city) {
            this.userInfo = {};
            this.db = JSON.parse(JSON.stringify(this.userInfo));
            pickerSource();
          }
          this.graduated = info.graduated;
          this.graduated && pickerSource();
          return Object.assign({ schoolGuid: info.school }, res)
        }).catch() : pickerSource();
    });

  }


  openPicker(name) {
    this.pickerName = name;
    this.pickerCmp.citiesData = this.picker[name];
    this.pickerCmp.open();
  }

  onChange(event) {
    if (this.pickerName == 'city') {
      this.userInfo.city = event['city'].value;
      this.userInfo.cityName = this.picker.text;
      this.userInfo.school = this.userInfo.schoolGuid = '';
    } else {
      this.userInfo.grade = event['region'].value;
      this.userInfo.gradeName = event['region'].text.trim();
    }
  }

  get state() {

    if (this.userInfo.city && this.userInfo.grade && this.userInfo.name && this.userInfo.role && this.userInfo.schoolGuid) return false;
    if (!this.userInfo.city || !this.userInfo.grade || !this.userInfo.name || !this.userInfo.role || !this.userInfo.schoolGuid) return undefined;
  }

  save() {
    if (this.state) return;
    if (/^.*[~!@#\$%\^&\*\(\)_+\-=\[\]\{\}\\\|\'\";:,\<\>\/\?\s+0123456789].*$/.test(this.userInfo.name)) return this.nativePro.toast('请输入正确的姓名')
    this.processing = false;
    this.nativePro.confirm("保存后不可更改？", ['取消', '保存'], '确认保存吗').then(res => {
      this.processing = !!res;
      if (!res) return;

      this.personalPro.update({
        name: this.userInfo.name,
        citycode: this.userInfo.city,
        school: this.userInfo.schoolGuid,
        role: this.userInfo.role,
        grade: this.userInfo.grade
      }).then(res => {
        this.processing = undefined;
        this.nativePro.prompt('信息更新成功');
        this.userPro.setUserInfo(this.userInfo);
        setTimeout(() => this.navCtrl.getPrevious().name != LOGIN_PAGE ? this.navCtrl.pop() : this.appCtrl.getRootNav().setRoot(TABS_PAGE, {}, { animate: true, animation: 'ios-transition', direction: 'forward' }), 1000);
      }).catch(ex => {
        this.processing = undefined;
        this.nativePro.toast(ex.message);
      });
    })

  }
  rebinding() {
    this.db = { name: this.userInfo.name };
    this.userInfo = { name: this.db.name };
    this.graduated = false;
  }
}
