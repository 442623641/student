import { Directive, Input } from '@angular/core';
import { HttpHandler } from '../../providers/httpHandler';
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
  @Input() loading: boolean = true;
  constructor(private httpHandler: HttpHandler) {
    //this.loading && this.httpHandler.invoke();

  }

  ngAfterViewInit() {
    this.hook && console.log(`Hello page ${this.hook}`);
    //this.mobclickAgent.onPageBegin(this.umengPage);
  }
  ngOnDestroy() {
    //this.mobclickAgent.onPageEnd(this.umengPage);
  }
}
