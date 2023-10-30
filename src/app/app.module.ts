import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarListComponent } from './car-list/car-list.component';
import { Route, RouterModule } from '@angular/router';
import { CarAddComponent } from './car-add/car-add.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { CarRoutingModule } from './car-routing.module';
import { CarEditComponent } from './car-edit/car-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarAddComponent,
    NotFoundComponent,
    HomeComponent,
    CarEditComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CarRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
