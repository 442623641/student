import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackageguidePage } from './packageguide';

@NgModule({
  declarations: [
    PackageguidePage,
  ],
  imports: [
    IonicPageModule.forChild(PackageguidePage),
  ],
})
export class PackageguidePageModule {}
