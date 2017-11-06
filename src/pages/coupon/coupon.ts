import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CouponProvider } from '../../providers/coupon/coupon';
import { NativeProvider } from '../../providers/native';
import { CouPon } from '../../model/coupon';
@IonicPage()
@Component({
  selector: 'page-coupon',
  templateUrl: 'coupon.html',
})
export class CouponPage {
  view: CouPon = { viewindex: 1, viewlength: 10 };
  listdata: any[];
  codes: string;
  values: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private couponpro: CouponProvider,
    private nativePro: NativeProvider,
  ) {}
  ionViewDidLoad() {}
  ngAfterViewInit(){
   /*
    获取有效优惠券数量
    */
   this.couponpro.getcount().then(res=>{
     console.log(res,'the num');
   });
   /*
    获取优惠券列表
    */
   this.couponpro.getlist(this.view).then(res=>{
     console.log(res,'the list');
     this.listdata=res.list;
   });
  }

  /*
 根据优惠券编码获取优惠券
  */
  search(){
    // 判断用户添加的是否是已经用过的优惠券
  this.listdata.forEach((v,i)=>{
    if(this.codes === v.couponCode){
      this.nativePro.toast('该优惠券已使用');
      this.values=v.couponCode;
    }
  });

  if(typeof this.values === 'string'){
    return false;
  }
  //不是则判断优惠券是否合法 合法则添加 不合法报错
  this.couponpro.wincoupon({ code: this.codes }).then(res=>{
    console.log(typeof res);
    if(typeof res === 'string'){
      this.nativePro.toast(res);
    }else{
      this.listdata.unshift(res);
    }
  }).catch(err=>{
    if(err){
      this.nativePro.toast('该优惠券不存在');
    }
  })
}
}
