import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainDService } from '../train-d.service';
import { TrainModel } from '../train-detail';

@Component({
  selector: 'app-view-train',
  templateUrl: './view-train.component.html',
  styleUrls: ['./view-train.component.css']
})
export class ViewTrainComponent implements OnInit {
   
  id!: number;
  trainmodel!: TrainModel;
  constructor(private route: ActivatedRoute, private traindservice:TrainDService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.trainmodel = new TrainModel();
    this.traindservice.gettraindetailsById(this.id).subscribe( data => {
      this.trainmodel = data;
    })
  }

}
