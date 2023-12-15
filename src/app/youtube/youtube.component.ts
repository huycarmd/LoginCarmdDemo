import { Component, Input } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss'],
})
export class YoutubeComponent   {

  @Input() urlVideo: string = ""

  constructor() { }

  playingVideo() {
    console.log(this.urlVideo)
    Browser.open({url: this.urlVideo}) 
  }

}
