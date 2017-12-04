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
  itemsValue: any[] = [];
  @ViewChild('scroll') scroll: any;
  //@Input() volatile: boolean;
  @Input() set items(array: any[]) {
    //this.itemsValue = array
    console.log(array);
    if (array && array.length && this.db != JSON.stringify(array)) {
      this.db = JSON.stringify(array);
      this.itemsValue = typeof array[0] === "string" ? array.map(item => { return { name: item, visible: true } }) : array;
      this.itemsValue[this.selectedValue].visible || (this.selected = this.itemsValue.findIndex(item => { return item.visible }));
    }

  }
  //@Input() items: any[] = [];
  @Output() selectedChange = new EventEmitter();
  @Output() onChanged = new EventEmitter();

  selectedValue: number = 0;

  @Input()
  get selected() {
    return this.selectedValue;
  }

  set selected(val: number) {
    if (this.selectedValue == val) return;
    this.selectedValue = val;
    this.selectedChange.emit(this.selectedValue);
    setTimeout(() => this.onChanged.emit(this.selectedValue), 120);
  }
  offsetLeft: number;

  constructor(private el: ElementRef) {
    console.log('Hello ScrollheaderComponent Component');
  }

  ngAfterViewInit() {
    this.offsetLeft = this.el.nativeElement.offsetParent.offsetLeft;
  }

  tap(event) {
    console.log(event);
    let index = event.target.getAttribute('index');
    if (this.selected == index || !index && index !== "0") return;
    this.selected = index;
    this.scrollTo(event.target);
    //this.onChanged.emit(i);
  }
  scrollTo(target) {

    let middle = this.scroll.scrollElement.offsetWidth / 2 - target.offsetWidth / 2;
    let rect = target.getBoundingClientRect();
    let x = rect.left - this.offsetLeft - middle;
    console.log(x);
    this.scroll.scrollToX(x, 220);
    //console.log(rect);
    //this.scroll.
  }
}
