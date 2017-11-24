import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TradePage } from './trade';
import { TradeProvider } from '../../providers/trade/trade';
import { ComponentsModule } from '../../components/components.module';
@NgModule({
  declarations: [
    TradePage,
  ],
  imports: [
    IonicPageModule.forChild(TradePage),
    ComponentsModule,
  ],
  providers: [
    TradeProvider,
  ]
})
export class TradePageModule {}
