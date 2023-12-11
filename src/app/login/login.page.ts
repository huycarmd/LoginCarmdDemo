import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { StorageMap } from '@ngx-pwa/local-storage';

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


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient,
    private storage : StorageMap,
    private loadingCtrl: LoadingController
  ) {

  }

  Login() {
    this.GetUser()
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 3000,
      spinner: 'circles',
    });

    loading.present();
  }

  GetUser() {
    if (this.emailVal == "" || this.passwordVal == ""){
      alert("Please type Email and Password to Login!")
      return 
    } else {
      this.showLoading()
      let headers = { 'Content-Type': 'application/json' }; 
      return this.http
        .post(
          "https://dev-api-pro.repairsolutions.com/app1.0/api/users/login",
          { emailAddress: this.emailVal, password: this.passwordVal },
          { headers }
        )
        .toPromise()
        .then((data: any) => {
          let person: Person = data;
          console.log(person);
          if (person.message.code == 0) {
            if (this.isRemember){
              this.storage.set("Users", data).subscribe((users) => {})
              console.log("Done save data")
            }
            this.emailVal = '';
            this.passwordVal = '';
            this.router.navigate(['/home']);
          } else {
            alert("Don't have data for this Email!");
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
