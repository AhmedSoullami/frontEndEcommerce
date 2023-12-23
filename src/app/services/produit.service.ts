import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private httpclient: HttpClient) { }
  listProduit(idUser: number) {
    
    return this.httpclient.get(`http://localhost:8888/CLIENT-SERVICE/getUtilisateurProduis/${idUser}`);
  }

}
