import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonalProvider } from '../../providers/personal/personal';
import { StaticProvider } from '../../providers/static/static';
import { Picker } from '../../model/picker';
import { UserInfo } from '../../model/userInfo';
import { UserProvider } from '../../providers/user';
import { NativeProvider } from '../../providers/native';
import { PERSONAL_PAGE, SCHOOLS_PAGE } from '../pages.constants'
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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public staticPro: StaticProvider,
    public userPro: UserProvider,
    public personalPro: PersonalProvider,
    private nativePro: NativeProvider
  ) {}

  ngOnInit() {

    this.initialize();

  }

  ngAfterViewInit() {
    //this.initialize();
  }

  /**
   * 获取城市数据
   */
  initialize() {
    this.personalPro.schoolChecked$.subscribe(res => {
      res = res || {};
      this.userInfo.school = res.name;
      this.userInfo.schoolGuid = res.guid;
    })

    Promise.all([this.getUserInfo(), this.staticPro.address(), this.staticPro.grade()]).then(res => {
      this.userInfo = res[0];
      this.db = {} || JSON.parse(JSON.stringify(res[0]));
      this.picker = {
        city: res[1],
        grade: res[2],
        text: ''
      };
    });
  }

  getUserInfo() {
    this.userInfo = this.navParams.get("user");
    if (this.userInfo) return Promise.resolve(this.userInfo);
    this.userPro.userInfo().then(res => {
      this.graduated = !res.graduated;
      this.userInfo.schoolGuid = res.school;
      this.graduated && this.personalPro.refresh$.subscribe(user => {
        this.userInfo = this.db = user;
        this.graduated = false;
        console.log('refresh:' + user);
      });
      console.log(res);
    });
    return <any > this.userPro.getUserInfo();
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
    this.processing = false;
    this.nativePro.confirm("确认保存吗，保存后不可更改？", ['取消',
      '保存'
    ]).then(res => {
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
        this.nativePro.toast('个人信息更新成功');
        this.userPro.setUserInfo(this.userInfo);
        this.personalPro.refresh(this.userInfo);
        setTimeout(() => this.navCtrl.pop(), 1000);
      }).catch(ex => {
        this.processing = undefined;
        this.nativePro.toast('更新失败，请稍后再试');
      });
    })

  }
}
