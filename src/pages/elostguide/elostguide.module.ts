import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ElostguidePage } from '../elostguide/elostguide';
import { ElostPageModule } from '../elost/elost.module';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    ElostguidePage,
  ],
  imports: [
    IonicPageModule.forChild(ElostguidePage),
    ComponentsModule,
    DirectivesModule,
    ElostPageModule,
  ],
})
export class ElostguidePageModule {}
