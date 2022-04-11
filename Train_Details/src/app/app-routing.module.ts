import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTrainDetailsComponent } from './add-train-details/add-train-details.component';
import { TrainDetailListComponent } from './train-detail-list/train-detail-list.component';
import { UpdateTrainDetailsComponent } from './update-train-details/update-train-details.component';
import { ViewTrainComponent } from './view-train/view-train.component';


const routes: Routes = [
  {path:'traindetails', component: TrainDetailListComponent},
  {path: 'add-traindetails', component:AddTrainDetailsComponent},
  {path:'', redirectTo:'traindetails', pathMatch: 'full'},
  {path: 'update-traindetails/:id', component:UpdateTrainDetailsComponent},
  {path:'view-train/:id', component: ViewTrainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
