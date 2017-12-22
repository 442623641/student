export class Pageview {
  viewindex: number;
  viewlength: number;
  constructor(obj: {
    viewindex: number,
    viewlength: number
  } = { viewindex: 1, viewlength: 10 }) {
    this.viewindex = obj.viewindex || 1;
    this.viewlength = obj.viewlength || 10;
    // code...
  }
}
