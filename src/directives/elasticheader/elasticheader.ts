import { Directive, ElementRef, Input, NgZone, Renderer } from '@angular/core';
import { Content } from 'ionic-angular';
/**
 * Generated class for the ElasticheaderDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[elastic-header]' // Attribute selector
})
export class ElasticheaderDirective {
  HEIGHT: number;
  @Input()
  set scrollTop(h: number) {
    if (h === undefined) return;
    var newImageHeight = Math.max(this.HEIGHT - h, 0);
    this.zone.run(() => this.renderer.setElementStyle(this.el.nativeElement, 'height', Math.max(this.HEIGHT - h, 0) + 'px'));

  }
  constructor(
    private el: ElementRef,
    private zone: NgZone,
    private renderer: Renderer

  ) {
    console.log('Hello ElasticheaderDirective Directive');
  }

  ngAfterViewInit() {
    this.HEIGHT = this.el.nativeElement.offsetHeight;
  }

}
