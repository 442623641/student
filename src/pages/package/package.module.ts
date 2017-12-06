import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackagePage } from './package';
import { PackageguidePageModule } from '../packageguide/packageguide.module';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    PackagePage,
  ],
  imports: [
    IonicPageModule.forChild(PackagePage),
    PackageguidePageModule,
    ComponentsModule,

  ],
})
export class PackagePageModule {}
