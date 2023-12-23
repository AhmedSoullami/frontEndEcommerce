import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpclient:HttpClient) { }
  register(nom: string, email: string, passwd: string) {
    let options = {
      headers: new HttpHeaders({
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "http://localhost:4200"
      })
    };

    let data = {
      nom: nom,
      email: email,
      passwd: passwd
    };

    return this.httpclient.post("http://localhost:8780/register", data, options);
  }
}
