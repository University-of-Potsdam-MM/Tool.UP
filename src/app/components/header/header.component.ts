import { Component, OnInit } from '@angular/core';
import { logging } from 'protractor';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public loggedIN: boolean = false; 
  constructor(public rest:DataService) { }

  ngOnInit() 
  {
  }


}
