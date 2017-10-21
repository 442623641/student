import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TradePage } from './trade';
import { TradeProvider } from '../../providers/trade/trade';
@NgModule({
  declarations: [
    TradePage,
  ],
  imports: [
    IonicPageModule.forChild(TradePage),
  ],
  providers: [
    TradeProvider,
  ]
})
export class TradePageModule {}
