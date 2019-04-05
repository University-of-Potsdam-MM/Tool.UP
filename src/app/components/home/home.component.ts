import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  cats:any = [];

  constructor(public rest:DataService, private route: ActivatedRoute, private router: Router) { }



  
  ngOnInit() {
  }

}
