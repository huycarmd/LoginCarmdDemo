import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../login/login.page';
import { StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data!: Person;
  firstName! : string
  lastName! : string

  constructor(private route: ActivatedRoute, private router: Router, private storage : StorageMap) {
    // this.route.queryParams.subscribe(param => {
    //   if (param && param['special']){
    //     this.data = JSON.parse(param['special'])
    //     this.firstName = this.data.firstName
    //     this.lastName = this.data.lastName
    //   }
    // })
    storage.get("Users").subscribe((users) => {
      console.log(users)
      let user = JSON.stringify(users)
      this.data = JSON.parse(user)
      this.firstName = this.data.firstName
      this.lastName = this.data.lastName
    })
  }

  SignOut() {
    this.storage.delete('Users').subscribe(() => {});
    this.router.navigate(['/login']);
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
