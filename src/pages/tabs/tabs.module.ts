import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { HomePageModule } from '../../pages/home/home.module';
import { UsercenterPageModule } from '../../pages/usercenter/usercenter.module';
import { NewsPageModule } from '../../pages/news/news.module';

/**
 *Components module
 */
//import { LoadingModule } from '../../components/loading/loading.module'
//import { Loading } from '../../components/loading/loading'
//import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
    HomePageModule,
    UsercenterPageModule,
    NewsPageModule,
  ]
})
export class TabsModule {}
