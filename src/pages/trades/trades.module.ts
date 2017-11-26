import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TradesPage } from './trades';
import { TradesProvider } from '../../providers/trades/trades';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    TradesPage,
  ],
  imports: [
    IonicPageModule.forChild(TradesPage),
    ComponentsModule,
  ],
  providers: [
    TradesProvider,
  ]
})
export class TradesPageModule {}
