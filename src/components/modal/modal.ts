import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Generated class for the ModalComponent component.
 * Add by leo zhang 201710010101
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'modal',
  templateUrl: 'modal.html'
})
export class ModalComponent {
  timer: any;
  ready: boolean;
  openValue: boolean;
  opacity: number = 0;
  @Output() openChange = new EventEmitter();
  @Input() option: {
    total: number,
    unauthorized: number,
    text: string,
    title: string,
    subtitle: string,
  } = {
    total: 0,
    unauthorized: 0,
    title: '',
    subtitle: '',
    text: ''
  };

  @Input()
  get open() {
    return this.openValue;
  }
  set open(val: boolean) {
    //this.openValue = val;
    //this.openChange.emit(this.openValue);
    clearTimeout(this.timer);

    if (val) {
      this.ready = val;
      this.opacity = 0;
      this.timer = setTimeout(() => {
        this.openValue = val;
        this.opacity = 1;
        this.openChange.emit(this.openValue);
      }, 60);
    } else {
      this.openValue = val;
      this.openChange.emit(this.openValue);
      this.timer = setTimeout(() => {
        this.ready = false;
        this.opacity = 0;
      }, 1000);
    }

  }


  constructor() {
    console.log('Hello ModalComponent Component');
  }

  ngAfterViewInit() {}

  close() {
    this.open = false;
  }


}
