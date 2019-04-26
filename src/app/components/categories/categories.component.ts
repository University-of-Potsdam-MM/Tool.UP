import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Category } from 'src/app/interfaces/category';
import { Application } from 'src/app/interfaces/application';
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
  

  onClickapp(id)
  {
    console.log(id); 
    this.rest.getApps(id).subscribe((data: Array<Application>) =>
    {
      this.apps = data; 
    });
  }

  onClickMe(id) 
  {
    let splited = id.split("-"); 
    if(splited[0] == "application")
    {
      //Do nothing here
    }else
    {
      console.log(id); 
      this.rest.getApps(id).subscribe((data: Array<Application>) =>
      {
        this.apps = data; 
        console.log("getApps"); 
      });
  
      this.rest.getCatbyID(id).subscribe((data: Category) => 
      {
        this.category = data;
        console.log("getCATbyID"); 
      });
      
    }
    
  }

  getCatbyID(id) 
  {
    this.rest.getCatbyID(id).subscribe((data: Category) =>
    {
      this.category = data;
    });
  }
}