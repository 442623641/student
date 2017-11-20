import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { HttpProvider } from '../http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PersonalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersonalProvider {

  constructor(public http: HttpProvider) {
    console.log('Hello PersonalProvider Provider');
  }
  address() {
    return this.http.get('../assets/data/address.json')
      .catch(err => {
        return Promise.reject(err)
      })

  }

  grade() {
    return this.http.get('../assets/data/grade.json')
      .catch(err => {
        return Promise.reject(err)
      })

  }
}
