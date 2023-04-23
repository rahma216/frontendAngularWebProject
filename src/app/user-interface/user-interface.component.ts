import { Component, OnInit } from '@angular/core';
import { Evenement } from '../evenement';
import { EvenementService } from '../evenement.service';
import { UserFormService } from '../user-form.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserForm } from '../user-form';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-interface',
  templateUrl: './user-interface.component.html',
  styleUrls: ['./user-interface.component.css']
})
export class UserInterfaceComponent implements OnInit {
  selectedEvent!: Evenement;
  evenements!: Evenement[];
  id!: number;
  userForm: UserForm = new UserForm();

  eventControl = new FormControl('', Validators.required);

  constructor(private route: ActivatedRoute, private evenementService: EvenementService, private router: Router, private userFormService: UserFormService) { }

  ngOnInit(): void {
    this.evenementService.getEventList().subscribe(evenements => {
      this.evenements = evenements;
    });
  }


  selectEvent(event: any): void {
    this.selectedEvent = event;
    this.evenements = [event]; // to display only the selected event
  }
  saveUserForm() {
    const event = this.userForm.event!;
    const now = new Date();
    const eventDate = new Date(event.date);
  
    this.evenementService.getUserFormsCountById(event.id).subscribe(
      count => {
        if (count >= event.capacite) {
          alert('Sorry, this event has reached its capacity.');
          return;
        }
  
        if (now.getTime() > eventDate.getTime()) {
          alert('Sorry, this event has already passed.');
          return;
        }
  
        this.userFormService.createUserForm(this.userForm).subscribe(
          data => {
            console.log(data);
            this.goToUserFormList();
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    );
  }
  


  goToUserFormList() {
    this.router.navigate(['/evenement']);
  }

  onSubmit() {
    console.log(this.userForm);
    this.saveUserForm();
  }
}
