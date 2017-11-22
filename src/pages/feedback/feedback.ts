import { Component } from '@angular/core';
import { IonicPage, NavController,NavParams } from 'ionic-angular';
import { ValidationProvider } from "../../providers/validation/validation";
import { NativeProvider } from "../../providers/native"
/**
 * Generated class for the FeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html',
})
export class FeedbackPage {
  base64: any[];
  name: any[];
  pic:any[]=[];
  previewImgFile:any[]=[];
  text: any;
  isShow: boolean;
  img: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private validate: ValidationProvider,
    private nativepro: NativeProvider
  ) {}

  imgsrc(e){
   this.base64=e.map((v,i)=>{
        return { link: v.slice(v.lastIndexOf(',')+1)};
    });
    this.name=this.previewImgFile.map((v,i)=>{
        return { name:v.name };
    });
  }
  submit(){
    if(this.base64){
      for (let i = 0; i < this.base64.length; i++) {
        let obj = {
          "base64str": this.base64[i].link,
          "name": this.name[i].name
        };
        this.pic.push(obj);
      }
      let picjson = {"desc": this.text, "imgs": JSON.stringify(this.pic)};
      // console.log(picjson);
      this.validate.back({"desc": this.text, "imgs": JSON.stringify(this.pic)}).then(res => {
        console.log(res);
        this.nativepro.toast('反馈上传成功');
      }).catch(err => {
        console.log(err);
        this.nativepro.toast(err.message);
      });
      this.pic = [];
      } else{
        this.validate.back({"desc": this.text,"imgs":""}).then(res=>{
          console.log(res);
          this.nativepro.toast('反馈上传成功');
        }).catch(err=>{
          console.log(err);
          this.nativepro.toast(err.message);
        })
      }
  }














  //遮挡层点击事件
  backdropclick(e){
    //判断点击的是否为遮罩层，是的话隐藏遮罩层
    if(e.srcElement.className != 'itemClass'){
      this.isShow = false;
    }
    //隐藏滚动条
    this.hiddenscroll();
    e.stopPropagation();
  }

  //弹出下拉框时，取消scroll
  hiddenscroll(){
    //获取当前组件的ID
    let aboutContent = document.querySelector("#aboutContent");
    //获取当前组件下的scroll-content元素
    let scroll:any = aboutContent.querySelector(".scroll-content");
    if(this.isShow){
      scroll.style.overflow='hidden';
    }else {
      scroll.style.overflow='';
    }
  }

picscale(a){
    this.isShow=true;
    this.img=a.src;
}


}
