import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { StorageMap } from '@ngx-pwa/local-storage';
import { CallAPIService } from '../call-api.service';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  emailVal = ''
  passwordVal = ''
  isDisable = false
  isRemember = false
  textErrorLogin = ''


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storage : StorageMap,
    private callAPI : CallAPIService,
    public loading : LoadingService
  ) {

  }

  Login() {
    this.GetUser()
  }

  GetUser() {
    if (this.emailVal.search("@") == -1 || this.passwordVal.length < 5){
      return 
    } else {
      this.loading.present()
      let headers = { 'Content-Type': 'application/json' }; 
      this.callAPI.callPOSTAPI(
          'https://dev-api-pro.repairsolutions.com/app1.0/api/users/login',
          { emailAddress: this.emailVal, password: this.passwordVal },
          { headers }
        )
        .subscribe((response: any) => {
          let person: Person = response;
          console.log(person)
          if (person.message.code == 0) {
            if (this.isRemember){
              this.storage.set("Users", response).subscribe((users) => {})
              console.log("Done save data")
            }
            this.emailVal = '';
            this.passwordVal = '';
            this.loading.dismiss()
            this.router.navigate(['/home']);
          } else {
            this.textErrorLogin = person.message.description
            this.loading.dismiss()
          }
        });
    }
  }
}


export interface Person {
  id: string
  firstName: string
  lastName: string
  emailAddress: string
  zipCode: string
  address1: string
  address2: string
  city: string
  state: string
  imageUrl: string
  language: string
  token: string
  message: Message
}
export interface Message {
  code: number
  description: string
}
