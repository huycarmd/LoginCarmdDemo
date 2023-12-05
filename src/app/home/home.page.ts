import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from '../login/login.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  data!: Person;
  firstName! : string
  lastName! : string

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(param => {
      if (param && param['special']){
        this.data = JSON.parse(param['special'])
        this.firstName = this.data.firstName
        this.lastName = this.data.lastName
      }
    })
  }

  SignOut() {
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
