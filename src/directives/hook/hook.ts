import { Directive, Input } from '@angular/core';
import { ViewController } from 'ionic-angular';
/**
 * Generated class for the HookDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[hook]' // Attribute selector
})
export class HookDirective {
  @Input('hook') hook: string;
  page: string;
  subenter: any;
  subleave: any;
  constructor(viewCtrl: ViewController) {
    this.page = viewCtrl.name;
    this.subenter = viewCtrl.didLeave.subscribe((res) => {
      console.log('page leave ' + this.page);
    })
    this.subleave = viewCtrl.didEnter.subscribe((res) => {
      console.log('page end ' + this.page);
    })
  }

  ngOnDestroy() {
    this.subenter && this.subenter.unsubscribe();
    this.subleave && this.subleave.unsubscribe();
    //this.mobclickAgent.onPageEnd(this.umengPage);
    //this.mobclickAgent.onPageEnd(this.umengPage);
  }

}
