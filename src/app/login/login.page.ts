import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private route:ActivatedRoute,private router:Router) { }

  Login(){
    // alert("Loging!...")
    this.router.navigate(['/home']);
  }
}
