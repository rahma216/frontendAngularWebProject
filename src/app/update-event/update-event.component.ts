import { Component , OnInit} from '@angular/core';
import { EvenementService } from '../evenement.service';
import { Evenement } from '../evenement';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../categorie';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.component.html',
  styleUrls: ['./update-event.component.css']
})
export class UpdateEventComponent implements OnInit{

  id!: number;
  evenement: Evenement = new Evenement();
  categoriesList!: Categorie[] ;
  constructor(private evenementService: EvenementService,private categorieService: CategorieService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.evenementService.getEvenementeById(this.id).subscribe(data => {
      this.evenement = data;
    }, error => console.log(error));
    this.categorieService.getCategorieList().subscribe(categoriesList =>{
      this.categoriesList= categoriesList;
    });
  }

  onSubmit(){
    this.evenementService.updateEvenement(this.id, this.evenement).subscribe( data =>{
      this.router.navigate(['/evenement']);
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/evenement']);
  }
}
