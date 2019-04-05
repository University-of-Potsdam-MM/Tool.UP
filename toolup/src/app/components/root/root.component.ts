import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {


  cats:any = [];

  constructor(public rest:DataService, private route: ActivatedRoute, private router: Router) { }



  
  ngOnInit() {
  }

}
