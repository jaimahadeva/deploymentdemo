import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JaishreeramComponent } from './jaishreeram/jaishreeram.component';

const routes: Routes = [
  {path:'jaishreeram',component:JaishreeramComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}

