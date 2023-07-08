import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ExploremoreComponent } from './exploremore/exploremore.component';
import { PopupsComponent } from './popups/popups.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { SubclustermasterComponent } from './subclustermaster/subclustermaster.component';
import { SubclustermasternotesComponent } from './subclustermasternotes/subclustermasternotes.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:'employees',component:EmployeeListComponent},
 
  {path:'',redirectTo:'employees',pathMatch:'full'},
  {path:'create-employee',component:CreateEmployeeComponent},
  {path: 'update-employee/:id',component: UpdateEmployeeComponent},
  {path:'projectdetails' ,component:ProjectdetailsComponent},
  {path : 'employee-details/:id',component:EmployeeDetailsComponent},
  {path:'exploremore',component:ExploremoreComponent},
  {path:'subclustermaster',component:SubclustermasterComponent},
  {path:'subclustermasternotes',component:SubclustermasternotesComponent},
  {path:'popups',component:PopupsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
