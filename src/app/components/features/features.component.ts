import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { splitAtColon } from '@angular/compiler/src/util';
import { strictEqual } from 'assert';
//import { lookup } from 'dns';


@Component(
{
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})

export class FeaturesComponent implements OnInit 
{

  public id:string; 
  public split:string; 
  checked = false; 

  constructor(public rest:DataService, private route: ActivatedRoute, private router: Router) { }
  features:any = []; 
  alles:any = []; 
  feature:any = []; 
  first:any = []; 
  second:any = []; 
  test = []; 
  response:any = []; 

  
  ngOnInit() 
  {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getAllFeatures(); 
  }


  onClickMe(featureid)
  { 
    let rest = []
    var id = this.test.lastIndexOf(featureid);
    if(id <= -1)
      {
        //nicht enthalten also hinzufügen
        this.test.push(featureid);
      }
      else
      {
        //ist enthalten
        this.test.splice(id,1)
      }
    let string = 'features=' + this.test.toString(); 
    this.rest.lookup(string).subscribe((data: {}) =>
      {
      this.response = data;
      }); 
  }

  getAllFeatures()
  {
    this.features = [];  
    this.rest.getAllFeatures().subscribe((data: {}) => 
    {
      this.alles = data; 
      this.features = data;
      this.first = (this.features.splice(0,this.features.length/2)); 
    });
  }
}