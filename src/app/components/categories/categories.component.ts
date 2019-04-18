import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Category } from 'src/app/interfaces/category';
import { Application } from 'src/app/interfaces/application';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';
import { CardsComponent } from '../cards/cards.component';

@Component(
{
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit 
{

  console = console;
  public id;
  category:Category;
  categories:Array<Category> = [];
  apps:Array<Application> = []; 
  constructor(public rest:DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() 
  {
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id != null) 
    {
      this.getCatbyID(this.id);
      this.getApps(this.id); 
    }
    else 
    {
      this.getAllCats();
    }
  }


  getAllCats() 
  {
    this.categories = [];
    this.rest.getAllCats().subscribe((data: Array<Category>) => 
    {
      this.categories = data;
    });
  }


  getApps(id)
  {
    this.apps = []; 
    this.rest.getApps(id).subscribe((data:Array<Application>) => 
    {
      this.apps = data;
    });
  }
  

  onClickMe(id) 
  {
    this.rest.getCatbyID(id).subscribe((data: Category) => 
    {
      this.category = data;
    });
    this.rest.getApps(id).subscribe((data: Array<Application>) =>
    {
      this.apps = data; 
    });
  }


  getCatbyID(id) 
  {
    this.rest.getCatbyID(id).subscribe((data: Category) =>
    {
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