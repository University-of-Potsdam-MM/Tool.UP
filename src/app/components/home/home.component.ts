import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component(
{
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit
{

  toplevel:any = [];
  public id:string;
  constructor(public rest:DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit()
  {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getTopLevelCats();
  }

  getTopLevelCats()
  {
    this.toplevel = [];
    this.rest.getTopLevelCats().subscribe((data: {}) =>
    {
      //console.log(data);
      this.toplevel = data;
    });

  }

}
