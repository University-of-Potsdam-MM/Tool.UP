import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component(
{
  selector: 'app-feature-search',
  templateUrl: './feature-search.component.html',
  styleUrls: ['./feature-search.component.scss']
})

export class FeatureSearchComponent implements OnInit 
{

  constructor(public rest:DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() 
  {
  
  }


}
