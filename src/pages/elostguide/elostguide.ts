import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ELOST_PAGE } from '../pages.constants';

/**
 * Generated class for the BookerrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-elostguide',
  templateUrl: 'elostguide.html',
})

export class ElostguidePage {
  lost = ELOST_PAGE;
  constructor() {}
}
