import { Component, HostListener, OnInit } from '@angular/core';
import { Evenement } from '../evenement'
import { EvenementService } from '../evenement.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  
  evenements!: Evenement[];

  constructor(private evenementService: EvenementService,
    private router: Router) { }

  ngOnInit(): void {
    this.evenementService.getEventList().subscribe(data => {
      this.evenements = data;
    });
  }

  private getevenement(){
    this.evenementService.getEventList().subscribe(data => {
      this.evenements = data;
    });
  }
  updateEvent(id: number){
    this.router.navigate(['update-event', id]);
  }
  private getEvents(){
    this.evenementService.getEventList().subscribe(data => {
      this.evenements = data;
    });
  }

  deleteEvent(id: number){
    this.evenementService.deleEvenement(id).subscribe(() => {
      this.getEvents();
      this.router.navigate(['evenement']);
    });
}

  EventDetails(id: number){
    this.router.navigate(['event-detail', id]);
  }

  

}
