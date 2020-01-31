import { Routes } from '@angular/router';

import { EmployeeCreateComponent } from '../employee-create/employee-create.component';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { EmployeeUpdateComponent } from '../employee-update/employee-update.component';
import { EmployeesListComponent } from '../employees-list/employees-list.component';


export const routes:Routes=[

  { path:'',pathMatch:'full',redirectTo:'employees-list'},
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'employee-details/:id', component: EmployeeDetailsComponent },
  { path: 'update-employee', component: EmployeeUpdateComponent },
  { path: 'employees-list', component: EmployeesListComponent }  

];