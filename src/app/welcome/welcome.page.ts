import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { StorageMap } from '@ngx-pwa/local-storage';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storage: StorageMap
  ) {
    // this.goToLoginPage()
    this.storage.get('FIRST').subscribe((first) => {
      console.log(first);
      if (first == "Welcome") {
        this.storage.get('Users').subscribe((user) => {
          if (user != undefined){
            this.router.navigate(['/home']);
          } else {
            this.router.navigate(['/login'])
          }
        })
      }
    });
  }
  
  goToLoginPage() {
    this.storage.set('FIRST', 'Welcome').subscribe((users) => {});
    this.router.navigate(['/login']);
  }
}
