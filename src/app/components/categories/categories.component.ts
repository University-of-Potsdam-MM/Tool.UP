import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  public id;
  cats:any = [];
  constructor(public rest:DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
   // console.log(this.id);
    console.log(this.getAllCats());  
    this.getAllCats(); 

    // if you get id != null then request http get with id and updat view
    //else
    // get all categories 
  }

  getAllCats() {
    this.cats = [];
    this.rest.getAllCats().subscribe((data: {}) => {
      console.log(data);
      this.cats = data;
    });
  }

}
