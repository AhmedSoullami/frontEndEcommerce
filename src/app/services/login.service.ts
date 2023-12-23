import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpclient: HttpClient) { }

  login(email: string, passwd: string): Observable<string> {
    let options = {
      headers: new HttpHeaders()
        .set('Content-type', 'application/json')
        .set('Access-Control-Allow-Origin', 'http://localhost:4200'),
      responseType: 'text' as 'json', 
    };
    let data = {
      email: email,
      passwd: passwd
    };
    return this.httpclient.post<string>("http://localhost:8780/login", data, options);
  }
}
