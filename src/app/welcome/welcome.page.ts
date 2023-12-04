import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {

  constructor(private route:ActivatedRoute,private router:Router) { }

  goToLoginPage() {
    this.router.navigate(['/login']);
    // alert("Begin Login!")
  }

}
