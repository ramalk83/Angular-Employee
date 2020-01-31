import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//import { OverlayModule } from "@angular/cdk/overlay";
import {ApiService} from "./api.service";
import { TableJsonComponent } from './table-json/table-json.component';

import {baseURL} from './shared/baseurl';
import { ApiJsonComponent } from './api-json/api-json.component';

import {Db} from './shared/db';

import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TableJsonComponent,
    ApiJsonComponent,
   
    EmployeeCreateComponent,
    EmployeeDetailsComponent,
    EmployeeUpdateComponent,
    EmployeesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //OverlayModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ApiService,
    {provide: 'BaseURL',useValue:baseURL}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }