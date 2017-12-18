import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the StaticProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StaticProvider {

  constructor(public http: Http) {
    //console.log('Hello AdressProvider Provider');
  }
  address() {
    return this.http.get('assets/data/address.json')
      .toPromise()
      .then(response => response.json())
      .catch(err => {
        return Promise.reject(err)
      })
  }

  getAddressName(code) {
    return this.address().then(address => {

      let procode = Math.floor(code / 1000),
        citycode = Math.floor(code / 100),
        res = [],
        provice = address.find(p => {
          return Math.floor(p.code / 1000) == procode;
        }),
        city = provice ? provice.children.find(c => {
          return Math.floor(c.code / 100) == citycode;
        }) : null,
        area = city ? city.children.find(a => {
          return a.code == code;
        }) : null;

      provice && provice.name && res.push(provice.name);
      city && city.name && res.push(city.name);
      area && area.name && res.push(area.name);

      let add = res.join(" ").trim();

      return add || "未知区域";
    });
  }

  grade() {
    return this.http.get('assets/data/grade.json')
      .toPromise()
      .then(response => response.json())
      .catch(err => {
        return Promise.reject(err)
      })
  }

  getGradeName(code) {
    let name = "";
    return this.grade().then(grades => {
      grades.find(childs => {
        childs.children[0].children.find(item => {
          if (item.code == code) {
            name = item.name;
            return name;
          }
        });
        return name;
      });
      return (name || '毕业').trim();
    });

  }

}
