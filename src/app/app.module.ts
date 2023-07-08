import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ProjectdetailsComponent } from './projectdetails/projectdetails.component';
import { SubclustermasterComponent } from './subclustermaster/subclustermaster.component';
import { ExploremoreComponent } from './exploremore/exploremore.component';
import { SubclustermasternotesComponent } from './subclustermasternotes/subclustermasternotes.component';
//  import{MatPaginatorModule} from '@angular/material';
import { NgxPaginationModule } from 'ngx-pagination';
import { CalendarModule, DateAdapter } from 'angular-calendar';

// import { Calendar } from '@fullcalendar/core';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { PopupsComponent } from './popups/popups.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    EmployeeDetailsComponent,
    ProjectdetailsComponent,
    SubclustermasterComponent,
    ExploremoreComponent,
    SubclustermasternotesComponent,
    PopupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
  
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
