import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { splitAtColon } from '@angular/compiler/src/util';


@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  public id; 
  public split; 
  

  constructor(public rest:DataService, private route: ActivatedRoute, private router: Router) { }
  features:any = []; 
  feature:any = []; 
  first:any = []; 
  second:any = []; 
  
    ngOnInit() 
    {
      this.id = this.route.snapshot.paramMap.get("id");
      this.getAllFeatures(); 
      this.getFeature(this.id);
    }

  
    getAllFeatures()
    {
      this.features = [];  
      this.rest.getAllFeatures().subscribe((data: {}) => {
      this.features = data;
      this.first = (this.features.splice(0,this.features.length/2)); 

      });
    }
  
    getFeature(id)
    {
      this.feature = [];
      this.rest.getAllFeatures().subscribe((data: {}) => {
      this.feature = data;
        //console.log(this.categories); 
      });
    }
  
}