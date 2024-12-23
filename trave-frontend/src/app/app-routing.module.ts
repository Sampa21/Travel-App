import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelsListComponent } from './travels-list/travels-list.component';
import { TravelCreateComponent } from './travel-create/travel-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/travels', pathMatch: 'full' },
  { path: 'travels', component: TravelsListComponent },
  { path: 'add-travel', component: TravelCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
