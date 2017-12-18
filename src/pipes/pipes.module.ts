import { NgModule } from '@angular/core';
import { SubconPipe, SubcolorPipe } from './subcon/subcon';
@NgModule({
  declarations: [
    SubconPipe,
    SubcolorPipe,
  ],
  imports: [],
  exports: [
    SubconPipe,
    SubcolorPipe
  ]
})
export class PipesModule {}
