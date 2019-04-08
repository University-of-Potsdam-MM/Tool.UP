import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

export interface Category{
  applications: Array<any>;
  description: string;
  id: string;
  subCategories: Array<Category>;
  superCategory: Category;
  title: string;
}


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})

export class CategoriesComponent implements OnInit
{

  console = console;
  public id;
  category:any = [];
  categories:any = []; 
  constructor(public rest:DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() 
  {
    this.id = this.route.snapshot.paramMap.get("id");

    if (this.id != null)
    {
      console.log(this.id)
      this.getCatbyID(this.id); 
      //Get Beschreibung der Kategorie
      //Update view- -- aber wie????!
    }
    else
    {
      this.getAllCats(); 

    }
  }

  getAllCats()
  {
    this.categories = [];
    this.rest.getAllCats().subscribe((data: {}) => {
      //console.log(data);
      this.categories = data;
      //console.log(this.categories); 
    });
  }

  onClickMe(id) 
  {
    console.log('Clicked!');
    console.log(id)

  }

 getCatbyID(id)
 {
  this.category = []; 
  this.rest.getCatbyID(id).subscribe((data: Category) =>
  {
    console.log(data);
    let result = [];
    for(let ele of data.subCategories){
      console.log(ele);
      result.push(ele);
    }
    console.log(result);
    /*
    let test = data.subCategories[0];
    test = JSON.parse(test);

    data.subCategories = test;
*/
    this.category = data;
    //console.log(this.category); 
  }); 
 
 } 

}
