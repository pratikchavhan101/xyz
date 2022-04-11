import { Component, OnInit } from '@angular/core';
import { TrainModel } from '../train-detail';
import { TrainDService } from '../train-d.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-train-details',
  templateUrl: './update-train-details.component.html',
  styleUrls: ['./update-train-details.component.css']
})
export class UpdateTrainDetailsComponent implements OnInit {

  id!: number;
  trainmodel:TrainModel = new TrainModel();
  constructor(private trainDService: TrainDService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.trainDService.gettraindetailsById(this.id).subscribe(data =>{
      this.trainmodel = data;
    }, error => console.log(error));
      
  }
  onSubmit(){
    this.trainDService. UpdatetrainDetails(this.id,this.trainmodel).subscribe(data =>{
       this.goTotraindetails();
      }
       , (error: any) => console.log(error));
    
    
  }

  goTotraindetails(){
    this.router.navigate(['/traindetails']);
  }
    
  

  
}



