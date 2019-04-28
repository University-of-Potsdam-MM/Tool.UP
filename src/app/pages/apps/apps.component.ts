import { Component, OnInit } from '@angular/core';
import { Application } from 'src/app/interfaces/application';
import { Category } from 'src/app/interfaces/category';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BrowserStack } from 'protractor/built/driverProviders';


@Component(
{
  selector: 'app-apps',
  templateUrl: './apps.component.html',
  styleUrls: ['./apps.component.scss']
})

export class AppsComponent implements OnInit {

  feature: any = [];
  constructor(public rest: DataService, private route: ActivatedRoute, private router: Router) { }
  public id: string;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getFeature(this.id);
  }

  getFeature(featureid) {
  this.feature = [];
  this.rest.getFeaturebyID(featureid).subscribe((data: {}) => {
      this.feature = data;
      console.log(data);
    });
  }
}
