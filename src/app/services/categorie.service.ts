import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private httpClient:HttpClient) { }
  listOfCategorie(idUser: number){
    return this.httpClient.get(`http://localhost:8888/CLIENT-SERVICE/getUtilisateurCategories/${idUser}`);
   
  }
}
