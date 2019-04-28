import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component(
{
  selector: 'app-feature-search',
  templateUrl: './feature-search.component.html',
  styleUrls: ['./feature-search.component.scss']
})

export class FeatureSearchComponent implements OnInit {
  applications: any = [];
  string: string;
  constructor(public rest: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.string = this.route.snapshot.paramMap.get('string');
    this.search(this.string);
  }

  search(searchString: string) {
  const query = 'search%20string=' + searchString;
  this.rest.search(query).subscribe((data: {}) => {
   this.applications = data;
   });
  }
}
