import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainDService } from '../train-d.service';
import { TrainModel } from '../train-detail';

@Component({
  selector: 'app-train-detail-list',
  templateUrl: './train-detail-list.component.html',
  styleUrls: ['./train-detail-list.component.css']
})
export class TrainDetailListComponent implements OnInit {

  trainDetails!: TrainModel[];

  constructor(private traind: TrainDService,
    private router:Router) { }

  ngOnInit(): void {
    this.gettrainDetails();
    
      
  }
      private gettrainDetails() {
    this.traind.gettraindetaillist().subscribe(data => {
      this.trainDetails = data;
   
      
    });
  }
  viewTrainDetails(id:number){
    this.router.navigate(['view-train',id]);

  }
  updateTrainDetails(id:number){
    this.router.navigate(['update-traindetails',id]);

  }

  deleteTrainDetails(id:number){
    this.traind.deleteTrainDetails(id).subscribe( data =>{
      console.log(data);
      this.gettrainDetails();
    })
  }
      
}
