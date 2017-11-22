import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonalProvider } from '../../providers/personal/personal';
/**
 * Generated class for the SchoolsPage page.
 * Add by leo zhang 201711010101
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-schools',
  templateUrl: 'schools.html',
})

export class SchoolsPage {
  params: any;
  pages: any = {};
  db: string;
  schoolsCache: School[];
  tempSchools: School[];
  checked: School;
  input: string;
  oldSearch: string;
  page = { index: 1, len: 30 };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private personalPro: PersonalProvider
    // public schoolsPro:schoolsProvider
  ) {
    this.params = this.navParams.data; //110100
  }

  ngAfterViewInit() {
    console.log('ionViewDidLoad SchoolsPage');
    this.personalPro.schools(this.params).then(res => {
      if (!res || !res.length) {
        this.db = this.schoolsCache = this.tempSchools = null;
        return;
      }
      this.db = JSON.stringify(res.map(item => { return Object.assign(item, { cache: item.name, priority: 0 }) }));
      this.schools = JSON.parse(this.db);
    }).catch(ex => {
      console.log(ex);
      this.db = this.schoolsCache = this.tempSchools = null;
    });
  }

  onInput(event) {
    if (this.input == this.oldSearch) return;
    let tempList: [School] = JSON.parse(this.db);
    for (let i = 0; i < this.input.length; i++) {
      let w = this.input.substr(i, 1),
        len = tempList.length;
      for (let j = 0; j < len; j++) {
        let item = tempList[j],
          index = item.cache.indexOf(w);
        if (index < 0) {
          tempList.splice(j, 1);
          j--;
          len--;
        } else {
          item.priority += item.cache.substring(0, index).length; //匹配度权重
          item.cache = item.cache.substring(index); //匹配值
        }
      }
    }
    this.oldSearch = this.input;
    this.schools = tempList.length ? tempList.sort((a, b) => {
      return (a.priority - b.priority) || (a.name.length - b.name.length);
    }) : null;
  }

  doInfinite(event ? ) {
    if (this.schoolsCache && this.schoolsCache.length) {
      this.tempSchools = this.schoolsCache.slice(0, this.page.index * this.page.len);
      this.page.index++;
    } else {
      this.tempSchools = null;
    }
    event && event.complete();
  }

  save() {
    this.personalPro.schoolChecked(this.checked);
    this.navCtrl.pop()
  }
  set schools(schools: School[]) {
    this.schoolsCache = schools;
    this.page.index = 1;
    this.doInfinite();
  }
}
export interface School {
  guid: string;
  name: string;
  cache: string;
  priority: number;
}
