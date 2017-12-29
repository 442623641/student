import { Directive, Input } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { MobclickagentProvider } from '../../providers/app/mobclickagent';
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
  @Input() hook: string;
  enterSubscribe: any;
  leaveSubscribe: any;
  pageName: string;
  constructor(private analyticsPro: MobclickagentProvider, private viewCtrl: ViewController) {
    //setTimeout(() => this.init(analyticsPro, viewCtrl), 120);

  }

  init(analyticsPro: MobclickagentProvider, viewCtrl: ViewController) {
    const pageName = this.hook || viewCtrl.id;
    analyticsPro.onPageBegin(pageName);
    this.leaveSubscribe = viewCtrl.didLeave.subscribe((res) => {
      analyticsPro.onPageEnd(pageName);
      this.leaveSubscribe.unsubscribe();
      this.enterSubscribe = viewCtrl.didEnter.subscribe((res) => {
        this.ngOnDestroy();
        this.init(analyticsPro, viewCtrl);
      })
    })
  }

  ngAfterViewInit() {
    this.pageName = this.hook || this.viewCtrl.id;
    this.analyticsPro.onPageBegin(this.pageName);
  }

  ngOnDestroy() {
    //this.enterSubscribe && this.enterSubscribe.unsubscribe();
    //this.leaveSubscribe && this.leaveSubscribe.unsubscribe();
    this.analyticsPro.onPageEnd(this.pageName);
  }

}
