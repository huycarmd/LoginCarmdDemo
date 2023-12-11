import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StorageMap } from '@ngx-pwa/local-storage';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {
  constructor(private route:ActivatedRoute,private router:Router, private storage : StorageMap) {
    this.goToLoginPage()
  }

  goToLoginPage() {
    this.storage.get("Users").subscribe((users) => {
      console.log(users)
      if (users != undefined){
        this.router.navigate(['/home'])
      } else {
        this.router.navigate(['/login']);
      }
    })
  }

}
