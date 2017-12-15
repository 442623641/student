import { Directive, ElementRef, Renderer2, Input, Output, EventEmitter } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { AnalyticsProvider } from '../../providers/app/analytics';
/**
 * Generated class for the HookDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[event]' // Attribute selector
})
export class EventDirective {
  @Output('touch') touch: EventEmitter < any > = new EventEmitter();
  @Input() event: string;
  enterSubscribe: any;
  leaveSubscribe: any;
  listen: any;
  islisten: boolean;
  constructor(
    private viewCtrl: ViewController,
    private analyticsPro: AnalyticsProvider,
    private el: ElementRef,
    private render: Renderer2) {

  }
  ngAfterViewInit() {
    this.bind();
    setTimeout(() => {
      this.enterSubscribe = this.viewCtrl.didEnter.subscribe((res) => {
        this.bind();
      });
      this.leaveSubscribe = this.viewCtrl.didLeave.subscribe((res) => {
        this.unbind();
      });
    }, 500)
  }


  private bind() {
    if (this.islisten) return;
    this.listen = this.render.listen(this.el.nativeElement, 'click', (e) => {
      this.touch.observers.length && this.touch.next(e);
      this.analyticsPro.event(this.event);
    });
    this.islisten = true;
  }
  private unbind() {
    if (!this.islisten) return;
    typeof this.listen === "function" && this.listen();
    this.islisten = false;
  }

  ngOnDestroy() {
    this.enterSubscribe && this.enterSubscribe.unsubscribe();
    this.leaveSubscribe && this.leaveSubscribe.unsubscribe();
    this.unbind();
  }

}
