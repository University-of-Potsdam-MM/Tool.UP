import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component(
{
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.scss']
})

/**
 * @class CatFormComponent
 * @implements OnInit
 */
export class CatFormComponent implements OnInit
{
  myForm: FormGroup;
  appsfromWebservice:any = [];
  superCatsFromWebservice:any = [];

  /**
   * @constructor
   * @param {FormBuilder} fb
   * @param {DataService} rest
   */
  constructor(private fb: FormBuilder,  public rest:DataService) { }

  ngOnInit()
  {

    this.getappsfromWebservice();
    this.getsuperCatsfromWebservice();
    this.myForm = this.fb.group(
      {
        titel: '',
        beschreibung:'',
        apps: this.fb.array([]),
        superCategory: this.fb.array([])
      });
      this.myForm.valueChanges.subscribe(console.log);
  }

  get apps()
  {
    return this.myForm.get('apps') as FormArray;
  }

  /**
   * @
   */
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
      //this.unusedFeatures = data;
    });
  }

  get superCategory()
  {
    return this.myForm.get('superCategory') as FormArray;
  }

  addSuperCategory()
  {
    const superCategory = this.fb.group(
      {
        name: []
      });
    this.superCategory.push(superCategory);
  }

  deletesuperCategory(i)
  {
    this.superCategory.removeAt(i);
  }

  getsuperCatsfromWebservice()
  {
    this.superCatsFromWebservice = [];
    this.rest.getTopLevelCats().subscribe((data: {}) =>
    {
      this.superCatsFromWebservice = data;
      console.log(data);
    });
  }

  onclick()
  {

  }

}

