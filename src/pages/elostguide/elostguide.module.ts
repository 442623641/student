import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElostguidePage } from '../elostguide/elostguide';
import { ComponentsModule } from '../../components/components.module';
import { ElostPageModule } from '../elost/elost.module';

@NgModule({
  declarations: [
    ElostguidePage,
  ],
  imports: [
    IonicPageModule.forChild(ElostguidePage),
    ComponentsModule,
    ElostPageModule,
  ],
})
export class ElostguidePageModule {}
