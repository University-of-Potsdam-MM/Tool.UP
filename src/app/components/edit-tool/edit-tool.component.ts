import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { Application } from 'src/app/interfaces/application';

@Component({
  selector: 'app-edit-tool',
  templateUrl: './edit-tool.component.html',
  styleUrls: ['./edit-tool.component.scss']
})
export class EditToolComponent implements OnInit 
{
  appsfromWebservice:any = []; 
  myForm: FormGroup; 
  ToolSelection: FormGroup; 
  app:Array<Application> = []; 
  constructor(private fb: FormBuilder,  public rest:DataService) { }

  ngOnInit() 
  {
  
    this.getappsfromWebservice(); 
    this.myForm = this.fb.group(
      {
        titel: '', 
        shortdescription: '', 
        contact: '', 
        provider: '', 
        beschreibung:'', 
        features: this.fb.array([]), 
        kategorien: this.fb.array([])
      }); 
      this.myForm.valueChanges.subscribe(console.log); 


    this.ToolSelection = this.fb.group(
      {
        selection:''
      }); 

  }

  onclick()
  {
    console.log(this.ToolSelection.getRawValue().selection); 
    this.getAppforEdit(this.ToolSelection.getRawValue().selection); 
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

  getAppforEdit(appid)
  {
    this.app = []; 
      this.rest.getApp(appid).subscribe((data:Array<Application>) => 
      {
        console.log(data); 
        this.app = data; 
        console.log(this.app); 
      });
  }


}
