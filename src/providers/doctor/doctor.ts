import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';

/*
  import { Http } from '@angular/http';
  Generated class for the DoctorProvider provider.
  Add by leo zhang 201710010101
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DoctorProvider {

  constructor(public http: HttpProvider, ) {
    console.log('Hello DoctorProvider Provider');
  }

  // default (data: any) {
  //   return this.http.get('exam/subjectdefault', data);
  // }

  subject(data: any) {
    return this.http.get(data.subject ? 'exam/subject' : 'exam/subjectdefault', data);
  }

  topic(data: any) {
    this.excellent();

    return this.http.get('question/topic', data);
  }

  excellent(data ? : any) {
    return this.http.get('question/excellent', data.name);
  }
}
