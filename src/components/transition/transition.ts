import { Component, Input, Output, ElementRef, Renderer, NgZone, EventEmitter } from '@angular/core';

/**
 * Generated class for the TransitionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */


@Component({
  selector: 'transition',
  template: `<ng-content *ngIf="active"></ng-content>`,
  styles: [`
    :host{
      display:none;
    }
  `]
})

export class Transition {
  private active: boolean = false;
  private transitionClass: string[] = [];
  private onTimout: any;
  private offTimout: any;
  private enterDuration: number = 1000;
  private leaveDuration: number = 1000;

  @Output() beforeEnter: EventEmitter < any >= new EventEmitter < any > ();
  @Output() afterEnter: EventEmitter < any >= new EventEmitter < any > ();

  @Output() beforeLeave: EventEmitter < any >= new EventEmitter < any > ();
  @Output() afterLeave: EventEmitter < any >= new EventEmitter < any > ();

  @Input() set duration(duration) {
    if (duration === undefined) return;
    if (duration.enter >= 0) this.enterDuration = Number(duration.enter) + 60 * 2;
    if (duration.leave >= 0) this.leaveDuration = Number(duration.leave) + 60;
    let d = Number(duration);
    if (d >= 0) {
      this.enterDuration = d + 60 * 2;
      this.leaveDuration = d + 60;
    }
  }


  @Input() set name(_name: string) {
    this.transitionClass = [`enter-${_name}`, `enter-active-${_name}`, `leave-${_name}`, `leave-active-${_name}`]
  }

  @Input() set if(isShow: boolean) {

    this.clearTm();
    this.zone.run(() => isShow ? this.setEnter() : this.active && this.setLeave());
  }
  @Input() set show(isShow: boolean) {
    this.clearTm();
    this.zone.run(() => isShow ? this.setEnter() : this.active && this.setLeave(false));
  }
  constructor(
    private el: ElementRef,
    private renderer: Renderer,
    private zone: NgZone, ) {}

  /*
   *入场
   */
  private setEnter() {
    this.beforeEnter.emit(null);
    if (this.active) {
      this.resetEnterClass();
    } else {
      this.active = true;
    }
    this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
    //this.renderer.setElementStyle(content, 'display', 'none');
    setTimeout(() => {
      let content = this.el.nativeElement.firstElementChild;
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'initial');
      this.renderer.setElementStyle(content, 'will-change', 'all');
      this.renderer.setElementClass(content, this.transitionClass[0], true);
      this.onTimout = setTimeout(() => {
        this.renderer.setElementClass(content, this.transitionClass[1], true);
        this.renderer.setElementClass(content, this.transitionClass[0], false);
      }, 60);
      this.offTimout = setTimeout(() => {
        this.renderer.setElementClass(content, this.transitionClass[1], false);
        this.renderer.setElementStyle(content, 'will-change', 'auto');
        this.afterEnter.emit(content);
      }, this.enterDuration);
    }, 60);
  }

  /*
   *离场
   */
  private setLeave(destory: boolean = true) {

    let content = this.el.nativeElement.firstElementChild;
    this.renderer.setElementStyle(content, 'will-change', 'all');
    this.beforeLeave.emit(content);
    this.resetLeaveClass();
    this.onTimout = setTimeout(() =>
      this.renderer.setElementClass(content, this.transitionClass[3], true), 80);
    this.offTimout = setTimeout(() => {
      this.renderer.setElementStyle(content, 'will-change', 'auto');
      //this.renderer.setElementClass(content, this.transitionClass[3], false);
      if (destory) {
        this.active = false;
      } else {
        this.renderer.setElementStyle(content, 'display', 'none');
      }
      setTimeout(() => (
        this.renderer.setElementClass(content, this.transitionClass[2], false),
        this.renderer.setElementClass(content, this.transitionClass[3], false)), 60);
      this.afterLeave.emit(content);

    }, this.leaveDuration);

  }

  /*
   *清除
   */
  private clearTm() {
    clearTimeout(this.onTimout);
    clearTimeout(this.offTimout);
  }

  private resetEnterClass() {
    let content = this.el.nativeElement.firstElementChild;
    if (!content) return;
    this.renderer.setElementStyle(content, 'display', 'none');
    this.renderer.setElementClass(content, this.transitionClass[0], true);
    this.renderer.setElementClass(content, this.transitionClass[1], false);
    this.renderer.setElementClass(content, this.transitionClass[2], false);
    this.renderer.setElementClass(content, this.transitionClass[3], false);
  }
  private resetLeaveClass() {
    let content = this.el.nativeElement.firstElementChild;
    this.renderer.setElementStyle(content, 'display', '');
    this.renderer.setElementClass(content, this.transitionClass[0], false);
    this.renderer.setElementClass(content, this.transitionClass[1], false);
    this.renderer.setElementClass(content, this.transitionClass[2], true);
    this.renderer.setElementClass(content, this.transitionClass[3], false);
  }


}
