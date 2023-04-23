import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EvenementService } from '../evenement.service';
import { Evenement } from '../evenement';
import { Categorie } from '../categorie';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit{

  evenement: Evenement = new Evenement();

  categoriesList!: Categorie[] ;
  constructor(private evenementService: EvenementService,private categorieService: CategorieService,
    private router: Router) { }
  
  ngOnInit(): void {
    this.categorieService.getCategorieList().subscribe(categoriesList =>{
      this.categoriesList= categoriesList;
    })
  }
  private getList(){
    this.categorieService.getCategorieList().subscribe(categoriesList =>{
      this.categoriesList= categoriesList;
    })
  }

  saveEvent(){

    
    this.evenementService.createEvenement(this.evenement).subscribe( data =>{
      console.log(data);
      this.goToEventList();
    },
    error => console.log(error));
  }

  goToEventList(){
    this.router.navigate(['/evenement']);
  }
  
  onSubmit(){

    console.log(this.evenement);
    this.saveEvent();
  }
}
