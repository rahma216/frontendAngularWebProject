import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EvenementService } from '../evenement.service';
import { Evenement } from '../evenement';
import { UserForm } from '../user-form';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent {

  id!: number;
event!: Evenement;
userForm!: UserForm[];
constructor(private route: ActivatedRoute, private evenementService: EvenementService) { }

ngOnInit(): void {
  this.id = this.route.snapshot.params['id'];

  this.event = new Evenement();
  this.evenementService.getEvenementeById(this.id).subscribe(data => {
    this.event = data;
  });
  this.getUserFormsByEventId(this.id);
}



getUserFormsByEventId(id: number) {
  this.evenementService.getUserFormsById(id)
    .subscribe((userForms: UserForm[]) => {
      this.userForm = userForms;
    });
}

}
