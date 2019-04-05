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
  categorie:any = []; 
  constructor(public rest:DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id != null)
    {
      this.getCatbyID(this.id); 
      console.log(this.id); 
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
    this.cats = [];
    this.rest.getAllCats().subscribe((data: {}) => {
      //console.log(data);
      this.cats = data;
    });
  }

  onClickMe(id) {
    console.log('Clicked!');
    console.log(id)

  }

 getCatbyID(id)
 {
  this.categorie = []; 
  this.rest.getCatbyID(id).subscribe((data: {}) =>
  {
    this.categorie = data;
  }); 
 
 } 



}
