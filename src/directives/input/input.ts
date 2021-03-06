import { Directive, HostListener, Input } from '@angular/core';

/**
 * Generated class for the NumberDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[type=integer],[type=name],[type=tel]:not([free]),[entype=password],[type=password]:not([free])' // Attribute selector
})
export class InputDirective {
  private regExp; //: RegExp;
  @Input() type: string;
  @Input() entype: string;
  @Input() min: number;
  @Input() max: number;
  @Input() maxlength: number;
  @Input() enpattern: any;
  constructor() {
    console.log('Hello NumberDirective Directive');
  }

  /**
   *监听失焦事件，设置最小值
   */
  @HostListener('ionBlur', ['$event'])
  onblur(e) {
    this.min >= 0 && e.setValue(Math.max(e.value, this.min));
  }

  @HostListener('ionChange', ['$event'])
  onChange(e) {
    const value = String(e.value);

    if (!value) return;

    let last = value.substr(0, value.length - 1),
      key = value.substr(value.length - 1);
    // console.log(`before value: ${last},key ${key}`);

    if (this.type != "name" && this.regExp && !this.regExp.test(key)) {
      return e.setValue(last);
    }
    if (this.type == "name" && this.regExp && this.regExp.test(key)) {
      return e.setValue(last);
    }


    //输入最大长度
    if (this.maxlength && value.length > this.maxlength) {
      return e.setValue(this.max ? this.max : last);
    }

    //输入最大值
    if (this.max && Number(value) > this.max) {
      return e.setValue(this.max);
    }

  }

  ngAfterViewInit() {
    this.maxlength = Number(this.maxlength);
    this.min = Number(this.min);
    this.max = Number(this.max);
    this.type = this.entype || this.type;
    this.initializePattern();
  }

  /**
   *初始化输入检查规则，正则
   */
  initializePattern() {
    if (this.enpattern) {
      return this.regExp = new RegExp(this.enpattern);
    }
    switch (this.type) {
      //数字，手机号
      case "tel":
      case "integer":
        this.regExp = new RegExp("[0-9]");
        this.maxlength = this.maxlength || 11;
        break;
        //密码
      case "password":
        this.regExp = new RegExp("[a-zA-Z0-9!@#$%^&*.]");
        this.maxlength = this.maxlength || 16;
        break;
      case "name":
        this.regExp = new RegExp("[^\u4e00-\u9fa5]");
        this.maxlength = this.maxlength || 10;
        break;
      default:
        // code...
        break;
    }
  }
}
