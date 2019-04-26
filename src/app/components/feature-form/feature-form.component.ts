import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { Application } from 'src/app/interfaces/application';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-feature-form',
  templateUrl: './feature-form.component.html',
  styleUrls: ['./feature-form.component.scss']
})
export class FeatureFormComponent implements OnInit
{
  myForm: FormGroup;
  appsfromWebservice:any = [];

  constructor(private fb: FormBuilder,  public rest:DataService) { }

  ngOnInit()
  {
    this.getappsfromWebservice();
    this.myForm = this.fb.group(
      {
        titel: '',
        beschreibung:'',
        apps: this.fb.array([])
      });
     // this.myForm.valueChanges.subscribe(console.log);
  }

  get apps()
  {
    return this.myForm.get('apps') as FormArray;
  }

  addapps()
  {
    const apps = this.fb.group(
      {
        name: []
      });
    this.apps.push(apps);
  }

  deleteapps(i)
  {
    this.apps.removeAt(i);
  }

  getappsfromWebservice()
  {
    this.appsfromWebservice = [];
    this.rest.getallApp().subscribe((data: {}) =>
    {
      this.appsfromWebservice = data;
    });
  }

  onclick()
  {

  }

}
