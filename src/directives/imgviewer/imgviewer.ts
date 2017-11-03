import { Directive, Input, ElementRef } from '@angular/core';
import { ModalController, Gesture } from 'ionic-angular';
import { PhotosviewerComponent } from '../../components/photosviewer/photosviewer';
/**
 * Generated class for the ImgviewerDirective directive.
 * Add by leo zhang 201710010101
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[imgviewer]', // Attribute selector
})
export class ImgviewerDirective {
  @Input('imgviewer') imgviewer: any;

  gesture: Gesture;

  processing: boolean;

  constructor(public modalCtrl: ModalController,
    private el: ElementRef) {}
  ngAfterViewInit() {
    this.bind();
  }

  /**
   *查看更多哦小题得分情况
   */
  openModal(obj ? ) {
    this.gesture.unlisten();
    let modal = this.modalCtrl.create(PhotosviewerComponent, obj || this.imgviewer, { enterAnimation: 'modal-md-slide-in', leaveAnimation: 'modal-md-slide-out' });
    modal.present();
    modal.onDidDismiss(() => { this.bind() });
  }

  private bind() {
    this.gesture = this.gesture || new Gesture(this.el.nativeElement);
    this.gesture.listen();
    this.gesture.on('tap', e => this.openModal());
  }

  ngOnDestroy() {
    this.gesture && this.gesture.destroy();
  }


}
