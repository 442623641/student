export class PaymentParams {

  constructor(argument) {

  }

  /**
   *订单类型
   *elecerrorbook:电子版错题本,
   *coin:购买学贝,
   *exam:开通学情报告,
   *package:开通学情套餐,
   *third:第三方活动支付,
   *errorbook:错题本
   */
  ordertype: 'elecerrorbook' | 'coin' | 'exam' | 'package' | 'third';

  /**
   *examguid
   */
  examguid ? : string;

  /**
   *订单类型（exam）差额学贝值 
   */
  selectxbz ? : number;

  /**
   *类型和参数如 exam|examguid
   */
  skucode ? : string;

  /**
   *订单类型（package）套餐年限 -1:季度套餐 1:1年 2:2年 3:3年
   */
  year ? : number;

  /**
   *订单类型（third）当前活动key
   */
  third ? : string;

  /**
   *订单类型（elecerrorbook）以英文, 分割（ 必须）
   */
  examguids ? : any;

  /**
   *产品类型 0: 基础版 1: 优享版（ 必须）
   */
  product ? : 0 | 1;

  /**
   *优惠券（ 可选）
   */
  couponcode ? : string;

  /**
   *收货地址
   */
  area ? : {

    /**
     *收货人姓名
     */
    name: string,

    /**
     *收货人电话
     */
    tel ? : number,

    /**
     *收货人区域
     */
    area ? : string,

    /**
     *详细地址
     */
    address: string
  };
}

export class PaymentOption extends PaymentParams {

  amount ? : number;

  constructor(argument) {
    super('');
  }
}


export class Order {

  /**
   *订单金额
   */
  value: number;

  /**
   *实际支付金额，单位角
   */
  amount: number = 0;

  /**
   *差额，单位角
   */
  dvalue: number = 0;

  /**
   *余额
   */
  balance: number = 0;

  /**
   *优惠码
   */
  coupon: string;

  constructor(balance: number = 0, value: number = 0) {
    this.balance = balance;
    this.setValue(value);
    this.amount = this.dvalue;
  }

  setValue(val: number) {
    this.value = val;
    this.dvalue = Math.max(this.value - this.balance, 0);
  }

  setCoupon(obj: { amount: number, couponCode: string } = { amount: 0, couponCode: '' }) {
    this.coupon = obj.couponCode;
    this.amount = Math.max(obj.amount, 0);
  }
}
