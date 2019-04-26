import { Component, OnInit } from '@angular/core';
import { logging } from 'protractor';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit
{
  public loggedIN: boolean = false;
  constructor(public rest:DataService, private router: Router ) { }

  response:any = [];
  search:string;

  ngOnInit(){}

  onSubmit()
  {
    this.router.navigate(['/feature-search', this.search])
  }

}
