import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Application } from 'src/app/interfaces/application';
import { Feature } from 'src/app/interfaces/feature';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {
  constructor(public rest:DataService, private route: ActivatedRoute, private router: Router) { }
  @Input() apptitle;

  public id; 
  app:Array<Application> = []; 
  features:Array<Feature> = []; 
  cats:Array<Application> = []; 

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id); 
    this.getApp(this.id); 
    this.getFeatures(this.id); 
    this.getCatsfromApp(this.id); 
  }


  getApp(id)
  {
      this.app = []; 
      this.rest.getApp(id).subscribe((data:Array<Application>) => {
      this.app = data; 
    });
  }

getFeatures(id)
{
  this.features = [];
  this.rest.getFeatures(id).subscribe((data:Array<Feature>) => {
  this.features = data;
  console.log(data);  
  });
}

getCatsfromApp(id)
{
  this.cats = []; 
  this.rest.getCatsfromApp(id).subscribe((data:Array<Application>) => {
  this.cats = data; 
  console.log(data); 
}); 
}

}
