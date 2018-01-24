export interface CouPon {
  viewindex ? : number=1;
  viewlength ? : number;
  lastime ? : string;
  isexpired ? : number;

  /**
   *0：通用优惠券，1：套餐，2：错题本，3：电子错题本
   */
  type ? : 0 | 1 | 2 | 3;
}

