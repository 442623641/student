import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReplyPage } from './reply';
import { ComponentsModule } from '../../components/components.module';
import { DirectivesModule } from '../../directives/directives.module';
@NgModule({
  declarations: [
    ReplyPage,
  ],
  imports: [
    IonicPageModule.forChild(ReplyPage),
    ComponentsModule,
    DirectivesModule
  ],
})
export class ReplyPageModule {}
