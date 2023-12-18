import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageMap } from '@ngx-pwa/local-storage';
import { CallAPIService } from '../call-api.service';
import { LoadingService } from '../loading.service';
import { Users } from '../shared/users.model';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, } from '@angular/forms';
import { EmailValidator } from '../shared/validators/email.validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  formBuilder = new FormBuilder()

  loginForm = this.formBuilder.group({
    email: new FormControl('', [EmailValidator.checkEmail, Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    checkRemember: new FormControl(false),
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private storage: StorageMap,
    private callAPI: CallAPIService,
    public loading: LoadingService
  ) {}

  Login() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.GetUser()
    }
  }

  GetUser() {
    this.loading.present();
    let headers = { 'Content-Type': 'application/json' };
    this.callAPI
      .callPOSTAPI(
        'https://dev-api-pro.repairsolutions.com/app1.0/api/users/login',
        { emailAddress: this.loginForm.value.email, password: this.loginForm.value.password },
        { headers }
      )
      .subscribe((response: any) => {
        let user: Users = response;
        console.log(user);
        if (user.message.code == 0) {
          if (this.loginForm.value.checkRemember) {
            this.storage.set('Users', response).subscribe((users) => {});
            console.log('Done save data');
          }
          this.loading.dismiss();
          this.router.navigate(['/home']);
        } else {
          this.loading.dismiss();
        }
      });
  }
}
