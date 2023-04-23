import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateEventComponent } from './create-event/create-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { UserInterfaceComponent } from './user-interface/user-interface.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CreateCategoryComponent } from './create-category/create-category.component';




@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    CreateEventComponent,
    UpdateEventComponent,
    EventDetailComponent,
    UserInterfaceComponent,
    AdminLoginComponent,
    CreateCategoryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
     HttpClientModule,FormsModule, BrowserAnimationsModule ,MatFormFieldModule, MatSelectModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
