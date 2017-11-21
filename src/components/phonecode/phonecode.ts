import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ValidationProvider } from '../../providers/validation/validation';
import { NativeProvider } from '../../providers/native';
/**
 * Generated class for the PhonecodeComponent component.
 * Add by leo zhang 201710010101
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'phonecode',
  templateUrl: 'phonecode.html'
})
export class PhonecodeComponent {
  @Output() nextpage: EventEmitter<any> = new EventEmitter<any>();
  @Input()  pageid:any;
  myInput: any;
  yzms: any;
  tokens: any;
  mycodes: any;
  cases: any;
  checked: boolean = true;
  category: any;
  public tips= "获取验证码";
  public disabled= false;
  constructor(
    private validation: ValidationProvider,
    private nativepro: NativeProvider
  ) {}

  ngAfterViewInit(){
    this.validation.getcode().then(res=>{
      this.yzms=res.img;
      this.tokens=res.token;
      console.log(this.pageid);
    });
  }



  getcode(){
    console.log(this.myInput);
    if(typeof this.myInput !== 'string'){
      this.nativepro.toast('手机号码不能为空');
      return false;
    }

    if(this.pageid==='registerpage'){
    //获取注册短信
    this.validation.getnote({ token: this.tokens,tel:this.myInput,yzm:this.yzms }).then(res=>{
      this.cases=res.token;
      this.mycodes=res.code;
      let num=60;
      if((/^1(3|4|5|7|8)\d{9}$/.test(this.myInput))){
        this.disabled=true;
        this.tips=num +'s后重新获取';
        const timer=setInterval(()=>{
          num--;
          if(num==0){
            this.disabled=false;
            this.tips='获取验证码';
            clearInterval(timer);
          }else{
            this.tips=num +'s后重新获取';
          }
        },1000);
      }
    }).catch(err=>{
      this.nativepro.toast(err.message);
    });
  }

if(this.pageid === 'findpwdpage'){
//  获取忘记密码的短信验证码
  this.validation.findpwdnote({token: this.tokens,tel:this.myInput,yzm:this.yzms}).then(res=>{
      console.log(res);
      this.cases=res.token;
      this.mycodes=res.code;
      let num=60;
      if((/^1(3|4|5|7|8)\d{9}$/.test(this.myInput))){
        this.disabled=true;
        this.tips=num +'s后重新获取';
        const timer=setInterval(()=>{
          num--;
          if(num==0){
            this.disabled=false;
            this.tips='获取验证码';
            clearInterval(timer);
          }else{
            this.tips=num +'s后重新获取';
          }
        },1000);
      }
  }).catch(err=>{
      this.nativepro.toast(err.message);
  })
}
 }

select(v){
  this.checked=v;
  console.log(this.checked,"传过来啦哈哈哈哈")
}











  go(){
    let value={
      a:this.cases,
      b:this.mycodes,
      c:this.myInput
    };
    if(typeof this.mycodes === 'string' && this.checked === true && (/^1(3|4|5|7|8)\d{9}$/.test(this.myInput)) === true){
        this.nextpage.emit(value);
    }
  }


}
