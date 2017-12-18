export class Pageview {
  viewindex: number;
  viewlength: number;
  constructor(obj: {
    viewindex: number,
    viewlength: number
  } = { viewindex: 1, viewlength: 5 }) {
    this.viewindex = obj.viewindex || 1;
    this.viewlength = obj.viewlength || 5;
    // code...
  }
}
