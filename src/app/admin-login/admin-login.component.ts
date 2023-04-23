import { Component } from '@angular/core';
import { Admin } from '../admin';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  admin: Admin = new Admin();
  constructor(private adminService: AdminService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.admin);
    this.adminService.login(this.admin).subscribe(
      data => {
        alert("login success");
        this.router.navigate(['evenement']);
      },
      error => alert("sorry")
    );
  }
  

}
