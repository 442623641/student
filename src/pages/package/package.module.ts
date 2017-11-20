import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackagePage } from './package';
import { PackageProvider } from '../../providers/package/package';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    PackagePage,
  ],
  imports: [
    IonicPageModule.forChild(PackagePage),
    ComponentsModule
  ],
  providers: [
    PackageProvider
  ]
})
export class PackagePageModule {}
