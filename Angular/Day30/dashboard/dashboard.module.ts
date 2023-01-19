import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { DetailsComponent } from '../details/details.component';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { UpdateempComponent } from '../updateemp/updateemp.component';
import { FilterPipe } from '../utility/filter.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    DetailsComponent,
    AddemployeeComponent,
    UpdateempComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NgxPaginationModule,
    FormsModule,  
    MaterialModule
  ]
})
export class DashboardModule { }
