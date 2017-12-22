import { NgModule } from '@angular/core';
import { EchartComponent } from './echart';
import 'echarts-liquidfill';
@NgModule({
  declarations: [
    EchartComponent
  ],
  exports: [
    EchartComponent,
  ],
})
export class EchartComponentModule {}
