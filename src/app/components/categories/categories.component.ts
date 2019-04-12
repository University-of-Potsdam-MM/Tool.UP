import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Category } from 'src/app/interfaces/category';
import { Application } from 'src/app/interfaces/application';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit {

  console = console;
  public id;
  category:Category;
  categories:Array<Category> = [];
  apps:Array<Application> = []; 
  constructor(public rest:DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");

    if (this.id != null) {
      this.getCatbyID(this.id);
      this.getApps(this.id); 
     // this.getFeature(this.id);  
    }
    else {
      this.getAllCats();
    }
  }


  getAllCats() {
    this.categories = [];
    this.rest.getAllCats().subscribe((data: Array<Category>) => {
     // console.log(data);
      this.categories = data;
    });
  }


  getApps(id)
  {
      this.apps = []; 
      this.rest.getApps(id).subscribe((data:Array<Application>) => {
      this.apps = data;
      console.log(data.applications);
      data.applications.forEach(test => {
        console.log(test.title); 
      }); 
    });
  
  }
  


  onClickMe(id) {
    console.log('Clicked!');
   // this.id = this.route.snapshot.paramMap.get("id");
    this.rest.getCatbyID(id).subscribe((data: Category) => {
    this.category = data; 
  });
  this.rest.getApps(id).subscribe((data: Array<Application>) => {
    this.apps = data; 
  });


}

 getCatbyID(id) {

  this.rest.getCatbyID(id).subscribe((data: Category) => {
    //console.log(data);
    //console.log(data.subCategories[0]);
    /*
    let result = [];
    for(let ele of data.subCategories){
      console.log(ele);
      result.push(ele);
    }
    console.log(result);
    */
    /*
    let test = data.subCategories[0];
    test = JSON.parse(test);

    data.subCategories = test;
*/
    this.category = data;
  });
 }

/*
 getFeature(id)
 {

  this.rest.getFeature(id).subscribe((data: Application) => {
  this.apps = data; 

 }); 
}
*/




}