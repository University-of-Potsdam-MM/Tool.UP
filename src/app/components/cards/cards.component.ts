import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component(
{
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})



export class CardsComponent implements OnInit
{
  @Input() title;
  constructor() { }

  ngOnInit() 
  {

    
  }


}
