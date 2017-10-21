import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnalysisProvider } from '../../providers/analysis/analysis';
import { AnalysiscontentPage } from '../analysiscontent/analysiscontent';
//import { ANALYSISCONTENT_PAGE } from '../pages.constants';

/**
 * Generated class for the AnalysisPage page.
 * Add by leo zhang 201710010101
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-analysis',
  templateUrl: 'analysis.html',
})
export class AnalysisPage {
  root: AnalysiscontentPage;
  /**
   * child pages
   */
  pages: any = {
    //analysiscontent: AnalysiscontentPage
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public analysisPro: AnalysisProvider,
  ) {}

  ngAfterViewInit() {
    console.log('ionViewDidLoad AnalysisPage');
  }

}
