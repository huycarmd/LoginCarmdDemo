import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'jquery';
import { Person } from './login/login.page';

@Injectable({
  providedIn: 'root',
})
export class CallAPIService {
  constructor(private http: HttpClient) {}

  callPOSTAPI(link: string, body: any, headers: any) {
    return this.http.post(link, body, headers);
  }

  callGETAPI(link: string) {
    return this.http.get(link)
  }
}
