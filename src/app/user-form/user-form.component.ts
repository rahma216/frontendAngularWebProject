import { Component, OnInit } from '@angular/core';
import { Evenement } from '../evenement';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserFormService } from '../user-form.service';
import { UserForm } from '../user-form';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  userForm !: UserForm;
  constructor(private userFormService: UserFormService,
    private router: Router) { }

    ngOnInit(): void {
  
  
    }

  saveuserForm(e: Evenement){
    this.userFormService.createUserForm(this.userForm , e).subscribe( data =>{
      console.log(data);
      this.goTouserFormList();
    },
    error => console.log(error));
  }

  goTouserFormList(){
    this.router.navigate(['/userForm']);
  }
  
  onSubmit(e: Evenement){

    console.log(this.userForm);
    this.saveuserForm(e);
  }

}
