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
export class PageDirective {
  enterSubscribe: any;
  leaveSubscribe: any;
  constructor(viewCtrl: ViewController, analyticsPro: AnalyticsProvider) {
    const pageName = viewCtrl.name;
    this.enterSubscribe = viewCtrl.didEnter.subscribe((res) => {
      analyticsPro.pageEnter(pageName);
    })
    this.leaveSubscribe = viewCtrl.didLeave.subscribe((res) => {
      analyticsPro.pageLeave(pageName);
    })
  }

  ngOnDestroy() {
    this.enterSubscribe && this.enterSubscribe.unsubscribe();
    this.leaveSubscribe && this.leaveSubscribe.unsubscribe();
  }

}
