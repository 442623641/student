import { NgModule } from '@angular/core';
import { SubconPipe, SubcolorPipe } from './subcon/subcon';
import { PercentPipe } from './percent/percent';
import { SlicePipe } from './slice/slice';
@NgModule({
  declarations: [
    SubconPipe,
    SubcolorPipe,
    PercentPipe,
    SlicePipe,
  ],
  imports: [],
  exports: [
    SubconPipe,
    SubcolorPipe,
    PercentPipe,
    SlicePipe
  ]
})
export class PipesModule {}
