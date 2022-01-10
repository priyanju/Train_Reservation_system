import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent} from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AngularMaterialModule } from 'src/app/material.module';
import { TrainListComponent } from './train-list/train-list.component';
import { AddPassengersComponent } from './add-passengers/add-passengers.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    HomeComponent,
    NavBarComponent,
    TrainListComponent,
    AddPassengersComponent,
    LoginComponent,
    UserComponent,
    
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    AngularMaterialModule
  ],

})
export class HomeModule { }
