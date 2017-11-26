import { Component, EventEmitter, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { UploadImgProvider} from "../../providers/uploadimg/uploadimg";
import {  NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the UploadimgComponent component.
 * Add by leo zhang 201710010101
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'uploadimg',
  templateUrl: 'uploadimg.html',
})
export class UploadimgComponent{
  previewImgSrcs = [];
  count:number = 0;
  @ViewChild('upload') upload: ElementRef;
  @Input()
  previewImgFile:string[]=[];
  @Output() ImgFileChange: EventEmitter<string[]> = new EventEmitter();
  @Output() imgscale : EventEmitter<any> = new EventEmitter();
  constructor(
    private uploadimg: UploadImgProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}
  previewPic(event) {
    if(!event.target.files[0]) {
      return;
    }
    this.uploadimg.readAsDataUrl(event.target.files[0]).then(result=> {
      this.previewImgSrcs.push(result);
      this.count++;
      let file = event.target.files[0];
      this.previewImgFile.push(file);
      this.ImgFileChange.emit(this.previewImgSrcs);
      if(this.count===3){
        this.upload.nativeElement.style.display='none';
      }
    })

  }
  remove(i) {
    this.count--;
    if(this.count < 3){
        this.upload.nativeElement.style.display='block';
    }
    this.previewImgSrcs.splice(i,1);
    this.previewImgFile.splice(i,1);
  }


  bigpic(event){
    this.imgscale.emit({src:event.srcElement['src']});
  }
}
