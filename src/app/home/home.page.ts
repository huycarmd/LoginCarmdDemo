import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../login/login.page';
import { StorageMap } from '@ngx-pwa/local-storage';
import { HttpClient } from '@angular/common/http';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data!: Person;
  firstName! : string
  lastName! : string

  isModalOpen = false;

  tutorials!: Tutorial;

  urlVideo = ''


  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private storage : StorageMap,
    private http: HttpClient,
    public sanitizer:DomSanitizer
    ) {
    storage.get("Users").subscribe((users) => {
      console.log(users)
      let user = JSON.stringify(users)
      this.data = JSON.parse(user)
      this.firstName = this.data.firstName
      this.lastName = this.data.lastName
    })

    http.get("https://dev-api-pro.repairsolutions.com/app1.1/api/supports/tutorials").toPromise().then((data: any) => {
      this.tutorials = data
      console.log(this.tutorials.message.code)
      console.log(this.tutorials.tutorialVideos.length)
    });

    this.urlVideo = "https://youtu.be/H8jl8LplZag"
  }



  SignOut() {
    this.storage.delete('Users').subscribe(() => {});
    this.router.navigate(['/login']);
  }

  // async playVideo() {

  // }

  setOpen(isOpen: boolean, link: string) {
    this.isModalOpen = isOpen;
    console.log(link)
  }
  public alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Alert canceled');
      },
    },
    {
      text: 'OK',
      role: 'confirm',
      handler: () => {
        console.log('Alert confirmed');
        this.SignOut()
      },
    },
  ];

}


export interface Tutorial {
  tutorialVideos:   TutorialVideo[];
  tutorialArticles: TutorialArticle[];
  tutorialManuals:  TutorialArticle[];
  message:          Message;
}

export interface Message {
  code:        number;
  description: string;
}

export interface TutorialArticle {
  title: string;
  link:  string;
}

export interface TutorialVideo {
  name:   string;
  videos: TutorialArticle[];
}