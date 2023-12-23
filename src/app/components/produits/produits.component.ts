import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits: any[] = [];
  nomProduitColor: string = 'red'; // Add your desired color values
  priceProduitColor: string = 'blue';

  constructor(private produitService: ProduitService) { }

  ngOnInit(): void {
    const userId = localStorage.getItem('userId');

    if (userId) {
      this.produitService.listProduit(Number(userId)).subscribe(
        (response: any) => {
          this.produits = response.produits;
        },
        error => {
          console.error(error);
        }
      );
    } else {
      console.error('Erreur de récupération de l\'id');
    }
  }

  onModifier(produit: any) {
    // Add logic for updating the product
    console.log('Modifier:', produit);
  }

  onSupprimer(produit: any) {
    // Add logic for deleting the product
    console.log('Supprimer:', produit);
  }
}
