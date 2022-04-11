import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrainModel } from './train-detail';

@Injectable({
  providedIn: 'root'
})
export class TrainDService {

  private baseURL = "http://localhost:8074/train/traindetails";

  constructor(private httpClient: HttpClient) { }

  gettraindetaillist(): Observable<TrainModel[]>{
    return this.httpClient.get<TrainModel[]>(this.baseURL);
  }

  gettraindetails(trainDetails: TrainModel): Observable<object>{
    return this.httpClient.post(this.baseURL, trainDetails);
  }

  gettraindetailsById(id:number): Observable<TrainModel>{
    return this.httpClient.get<TrainModel>(`${this.baseURL}/${id}`);
  }

  UpdatetrainDetails(id:number,trainmodel:TrainModel):Observable<object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, trainmodel)
  }

  deleteTrainDetails(id:number): Observable<object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
