import { Component } from '@angular/core';
import { Categorie } from '../categorie';
import { CategorieService } from '../categorie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {

  categorie: Categorie = new Categorie();

  constructor(private categorieService: CategorieService,private router: Router) { }

  onSubmit() {
    this.categorieService.createCategory(this.categorie)
      .subscribe(data => {
        console.log(data);
      });
      this.router.navigate(['evenement']);
  }
}
