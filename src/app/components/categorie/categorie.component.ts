// categorie.component.ts

import { Component } from '@angular/core';
import { CategorieService } from 'src/app/services/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent {
  categories: any[] = [];

  constructor(private categorieService: CategorieService) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');

    if (userId) {
      this.categorieService.listOfCategorie(Number(userId)).subscribe(
        (response: any) => {
          this.categories = response.categories;
          console.log(this.categories)
        },
        error => {
          console.error(error);
        }
      );
    } else {
      console.error('Erreur de récupération de l\'id');
    }
  }

  onModifier(category: any) {
    
  }

  onSupprimer(category: any) {
    
   
  }
}
