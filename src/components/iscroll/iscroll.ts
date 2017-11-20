import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'iscroll',
  template: `<div class="scroll-content" [class.scroll-y]="scrollY" [class.scroll-x]="scrollX"><ng-content></ng-content></div>`,
  styles: [`
    :host {
      position: relative;
      display: block;
      width:100%;
      overflow: hidden;
    }


    .scroll-x.scroll-content {
      overflow-x: scroll;
      height: calc(100% + 10px);
      height: -webkit-calc(100% + 10px);
      padding-bottom:10px;
    }

    .scroll-y.scroll-content {
      overflow-y: scroll;
      width: calc(100% + 10px);
      width: -webkit-calc(100% + 10px);
      padding-right:10px;
    }

   .scroll-content {
      overflow-y: hidden;
    }
  `]
})

export class Iscroll {
  //@ViewChild('scroll') scroll:any;
  private num: number = 10;
  @Input() scrollY: boolean = true;
  @Input() scrollX: boolean = false;
  public scrollElement: any;
  width: number;
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.scrollElement = this.el.nativeElement.firstElementChild;
    setTimeout(() => this.num = 1, 1500);

  }

  setTop(top) {
    this.scrollElement.scrollTop = top;
  }

  getScrollTop(): number {
    return this.scrollElement.scrollTop;
  }

  getMaxScrollTop(): number {
    return this.scrollElement.firstElementChild.offsetHeight - this.scrollElement.offsetHeight;
  }




  setLeft(left) {
    this.scrollElement.scrollLeft = left;
  }

  getScrollLeft(): number {
    return this.scrollElement.scrollLeft;
  }

  getMaxScrollLeft(): number {
    return this.scrollElement.firstElementChild.offsetWidth - this.scrollElement.offsetWidth;
  }

  /* 
   *滚动到左边
   */
  scrollToLeft(duration: number = 350) {
    return this.scrollToX(-this.getScrollLeft(), duration)

  }
  /* 
   *滚动到顶部
   */
  scrollToTop(duration: number = 350) {
    return this.scrollToY(-this.getScrollTop(), duration)

  }

  /* 
   *滚动到底部
   */
  scrollToBottom(duration: number = 350) {
    return this.scrollToY(this.getMaxScrollTop(), duration);
  }

  scrollToTarget(querySelector: string, duration: number = 350) {
    let targets = this.scrollElement.querySelectorAll(querySelector);
    if (!targets || !targets[0]) return new Promise(reslove => {
      console.warn(`the '${querySelector}' doesn't exist in iscroll`);
      reslove(null);
    });
    return this.scrollToElement(targets[0], duration);
  }

  scrollToElement(element: any, duration: number = 350) {
    let rect = element.getBoundingClientRect(),
      top = 0;
    if (rect.top < 0) {
      top = rect.top;
    } else {
      let dY = rect.bottom - this.scrollElement.offsetHeight;
      if (dY > 10) {
        top = rect.top;
      } else {
        return new Promise(reslove => reslove(false));
      }
    }
    return this.scrollToY(top, duration);
  }

  /* 
   *滚动动画处理
   */
  scrollToY(offsetY: number, duration: number = 350) {
    return new Promise(reslove => {
      let maxTop = this.getMaxScrollTop();
      if (Math.abs(offsetY) < 5 || maxTop < 0) {
        return reslove(false);
      }
      let currentFrameId = null,
        frames = 0,
        interval = Math.ceil(offsetY * 50 / duration),
        start = this.getScrollTop();

      offsetY = offsetY < 0 ? Math.max(-start, offsetY) : Math.min(maxTop, offsetY);

      let cancel = () => {
        window.cancelAnimationFrame(currentFrameId);
        currentFrameId = null;
        reslove(true);
      }
      let _raf = () => {
        currentFrameId = window.requestAnimationFrame(() => _nextFrame());
      }
      let _nextFrame = () => {
        frames += interval;
        let top = start + frames;
        this.setTop(Math.max(top, 0))
        // scrollElement.scrollTop = ;
        if (interval > 0 && frames >= offsetY || interval < 0 && frames <= offsetY) {
          cancel();
        } else {
          _raf();
        }
      }
      _raf();
    });
  }

  /* 
   *滚动动画处理
   */
  scrollToX(offsetX: number, duration: number = 350) {
    return new Promise(reslove => {
      let maxLeft = this.getMaxScrollLeft();
      if (Math.abs(offsetX) < 5 || maxLeft < 0) {
        return reslove(false);
      }
      let currentFrameId = null,
        frames = 0,
        interval = Math.ceil(offsetX * 50 / duration),
        start = this.getScrollLeft();

      offsetX = offsetX < 0 ? Math.max(-start, offsetX) : Math.min(maxLeft, offsetX);

      let cancel = () => {
        window.cancelAnimationFrame(currentFrameId);
        currentFrameId = null;
        reslove(true);
        console.log('scrollToX end');
      }
      let _raf = () => {
        currentFrameId = window.requestAnimationFrame(() => _nextFrame());
      }
      let _nextFrame = () => {
        frames += interval;
        let top = start + frames;
        this.setLeft(Math.max(top, 0))
        // scrollElement.scrollTop = ;
        if (interval > 0 && frames >= offsetX || interval < 0 && frames <= offsetX) {
          cancel();
        } else {
          _raf();
        }
      }
      _raf();
    });
  }

}
