import { Component, OnInit } from '@angular/core';
import { TrainModel } from '../train-detail';
import { TrainDService } from '../train-d.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-train-details',
  templateUrl: './add-train-details.component.html',
  styleUrls: ['./add-train-details.component.css']
})
export class AddTrainDetailsComponent implements OnInit {

  trainmodel: TrainModel  = new TrainModel ();

  constructor(private trainDService:TrainDService,
    private router: Router) { }

  ngOnInit(): void {
  }
  
  savetraindetails(){
    this.trainDService.gettraindetails(this.trainmodel).subscribe(data =>{
      console.log(data);
      this.goTotraindetails
    },
    error =>console.log(error));
    
  }

  goTotraindetails(){
    this.router.navigate(['/traindetails']);
  }
  onSubmit(){
    console.log(this.trainmodel);
    this.savetraindetails();
    
  }

}
