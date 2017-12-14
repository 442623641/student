import { Order } from './payment';

export class Package {
  expires: string;
  type: number;
  open: boolean;
  days: number;

  constructor(obj) {
    // code...
    this.expires = obj.expires;
    this.type = obj.type;

    this.open = obj.open;
    let now = new Date();
    let date = new Date(this.expires);
    this.days = Math.max(Math.floor((date.getTime() - now.getTime()) / (24 * 60 * 60 * 1000)), 0);

  }
}
/**
 *套餐
 */
export interface PackageOption {
  /**
   *套餐名称
   */
  name: string;

  /**
   *套餐时间
   */
  year: number;

  /**
   *套餐学贝值
   */
  value: number;

}
export class PackageO extends Order {

  /**
   *套餐
   */
  option ? : PackageOption;

  constructor(balance: number) {
    super(balance);
  }

  setPackage(obj: PackageOption) {
    this.option = Object.assign({}, obj);
    this.setValue(this.option.value);
  }


}
