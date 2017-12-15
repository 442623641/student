import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PackageguidePage } from './packageguide';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    PackageguidePage,
  ],
  imports: [
    IonicPageModule.forChild(PackageguidePage),
    ComponentsModule,
    DirectivesModule,
  ],
})
export class PackageguidePageModule {}
