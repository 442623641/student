import { Injectable } from '@angular/core';
import { HttpProvider } from '../http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

/*
  import { Http } from '@angular/http';
  Generated class for the EnalyzingProvider provider.
  Add by leo zhang 201710010101
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EnalyzingProvider {

  switchSource: Subject < any > = new Subject < any > ();
  switch$ = this.switchSource.asObservable();

  initSource: Subject < any > = new Subject < any > ();
  initiliaze$ = this.initSource.asObservable();

  constructor(public http: HttpProvider) {
    console.log('Hello EnalyzingProvider Provider');
  }

  switchSubject(obj ? : any) {

    this.switchSource.next(obj);

  }

  initiliaze(obj ? : any) {

    this.initSource.next(obj);

  }

  index() {
    return this.http.get('question/erroranalysis');
  }


  topics(data) {
    return this.http.get('question/topicnotice', data);
  }

  moreTopics(data) {
    return this.http.get('question/error', data);
  }

  excellent(data) {
    return this.http.get('question/excellent', data);
  }
  excellents(data) {
    return this.http.get('question/schoolquestion', data);
  }



}
