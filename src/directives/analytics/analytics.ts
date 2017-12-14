import { Directive } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { AnalyticsProvider } from '../../providers/app/analytics';
/**
 * Generated class for the HookDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: 'ion-content,[hook]' // Attribute selector
})
export class AnalyticsDirective {
  subenter: any;
  subleave: any;
  constructor(viewCtrl: ViewController, analyticsPro: AnalyticsProvider) {
    const pageName = viewCtrl.name;
    this.subleave = viewCtrl.didEnter.subscribe((res) => {
      analyticsPro.pageEnter(pageName);
      //console.log('page end ' + this.page);
    })
    this.subenter = viewCtrl.didLeave.subscribe((res) => {
      analyticsPro.pageLeave(pageName);
      //console.log('page leave ' + this.page);
    })

  }

  ngOnDestroy() {
    this.subenter && this.subenter.unsubscribe();
    this.subleave && this.subleave.unsubscribe();
    //this.mobclickAgent.onPageEnd(this.umengPage);
    //this.mobclickAgent.onPageEnd(this.umengPage);
  }

}
