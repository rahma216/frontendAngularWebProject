import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventListComponent } from './event-list/event-list.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CreateCategoryComponent } from './create-category/create-category.component';

const routes: Routes = [
  {path: 'evenement', component: EventListComponent},
  {path: '', redirectTo: 'admin-login', pathMatch: 'full'},
  {path: 'create-event', component: CreateEventComponent},
  {path: 'user-interface', component: UserInterfaceComponent},
  {path: 'update-event/:id', component: UpdateEventComponent},
  {path: 'event-detail/:id', component: EventDetailComponent},
  {path: 'admin-login', component: AdminLoginComponent},
  {path: 'create-category', component: CreateCategoryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
