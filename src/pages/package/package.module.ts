import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackagePage } from './package';
import { PackageguidePageModule } from '../packageguide/packageguide.module';
// import { PackageProvider } from '../../providers/package/package';
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
  // providers: [
  //   PackageProvider
  // ]
})
export class PackagePageModule {}
