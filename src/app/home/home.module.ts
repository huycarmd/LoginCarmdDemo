import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { YoutubeComponent } from '../youtube/youtube.component';
import { ChangeLinkYoutubePipe } from '../shared/changeyoutubelink.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, YoutubeComponent, ChangeLinkYoutubePipe]
})
export class HomePageModule {}
