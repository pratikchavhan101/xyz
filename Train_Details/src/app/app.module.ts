import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainDetailListComponent } from './train-detail-list/train-detail-list.component';
import { AddTrainDetailsComponent } from './add-train-details/add-train-details.component';
import { FormsModule } from '@angular/forms';
import { UpdateTrainDetailsComponent } from './update-train-details/update-train-details.component';
import { ViewTrainComponent } from './view-train/view-train.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainDetailListComponent,
    AddTrainDetailsComponent,
    UpdateTrainDetailsComponent,
    ViewTrainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
     FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
