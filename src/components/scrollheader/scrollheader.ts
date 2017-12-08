import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

/**
 * Generated class for the ScrollheaderComponent component.
 * Add by leo zhang 201710010101
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'scroll-header',
  templateUrl: 'scrollheader.html'
})
export class ScrollheaderComponent {
  private db: string;
  len: number = 4;
  itemsValue: any[] = [];
  selectedValue: number = 0;
  offsetLeft: number;
  @ViewChild('scroll') scroll: any;
  @Input() set items(array: any[]) {
    if (array && array.length && this.db != JSON.stringify(array)) {
      this.db = JSON.stringify(array);
      this.itemsValue = typeof array[0] === "string" ? array.map(item => { return { name: item, visible: true } }) : array;
      this.len = Math.max(this.itemsValue.filter(item => { return item.visible }).length, 4);
    }

  }
  @Output() selectedChange = new EventEmitter();
  @Input()
  get selected() {
    return this.selectedValue;
  }

  set selected(val: number) {
    if (this.selectedValue == Number(val)) return;
    this.selectedValue = Number(val);
    this.selectedChange.emit(this.selectedValue);
    this.setValue();
  }



  constructor(private el: ElementRef) {
    console.log('Hello ScrollheaderComponent Component');
  }

  ngAfterViewInit() {
    this.offsetLeft = this.el.nativeElement.offsetParent.offsetLeft;
  }

  tap(event) {
    let index = Number(event.target.getAttribute('index'));
    if (this.selected == index || !index && index !== 0) return;
    this.selected = index;
  }

  setValue() {
    if (this.len <= 4) {
      return;
    }
    let element = this.el.nativeElement.querySelector(`ion-col[index="${this.selectedValue}"]`);
    element && this.scrollTo(element);
  }

  scrollTo(target) {
    let middle = this.scroll.scrollElement.offsetWidth / 2 - target.offsetWidth / 2;
    let rect = target.getBoundingClientRect();
    let x = rect.left - this.offsetLeft - middle;
    console.log(x);
    this.scroll.scrollToX(x, 220);
  }
}
