import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { Application } from 'src/app/interfaces/application';
import { Feature } from 'src/app/interfaces/feature';
import { Category } from 'src/app/interfaces/category';

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
  clickedFeature: boolean = false; 
  editfeature: boolean = false; 
  editcat: boolean = false; 
  constructor(private fb: FormBuilder,  public rest:DataService) { }
  featureForApp:Array<Feature> = []; 
  categories:Array<Application> = []; 
  featuresFromWebservice:any = []; 
  appFeatures:any = []; 
  clicked = false; 
  deletedFeatures = []; 
  deletedCategories = []; 
  catsForApp:Array<Application> = [];
  catsFromWebservice:Array<Category>= [];  
    
  ngOnInit() 
  {
  
    this.getappsfromWebservice(); 
    this.getFeaturesfromWebservice(); 
    this.getCatsfromWebservice(); 
    this.myForm = this.fb.group(
      {
        title: '', 
        description: '', 
        shortDescription: '', 
        contact: '', 
        provider:'' 
        //features: this.fb.array([]), 
        //kategorien: this.fb.array([])
      }); 
      this.myForm.valueChanges.subscribe(console.log);

    this.ToolSelection = this.fb.group(
      {
        selection:''
      }); 
  }

  get cats() 
  {
    return this.myForm.get('kategorien') as FormArray; 
  }

  addCats()
  {
    const cat = this.fb.group(
      {
        name: []
      }); 
    this.cats.push(cat);
  }

  deleteCats(i)
  {
    this.cats.removeAt(i); 
  }

  onupdate()
  {
    //this.updateTool(this.myForm.getRawValue()); 
    //alert("Erfolg!");
    //window.location.reload();
  }

  ondelete()
  {
   // this.deleteTool(this.ToolSelection.getRawValue().selection); 
    alert("Erfolg"); 
    window.location.reload(); 
  }

  get features()
  {
    return this.myForm.get('features') as FormArray; 
  }

  addFeature()
  {

    const features = this.fb.group(
      {
        id: []
      }); 

    let feature = this.myForm.getRawValue().features; 
    let featuresarr = []; 

    feature.forEach(element => 
      {
        featuresarr.push(element.id);
      });

    this.features.push(features); 
  }


  deleteFeature(i)
  {
    this.features.removeAt(i); 
  }

  onclick()
  {
    this.clicked = true; 
    this.getAppforEdit(this.ToolSelection.getRawValue().selection); 
    this.getFeaturesforApp(this.ToolSelection.getRawValue().selection);
    this.getCatsfromApp(this.ToolSelection.getRawValue().selection)    
  }

  getappsfromWebservice()
  {
    this.appsfromWebservice = [];  
    this.rest.getallApp().subscribe((data: {}) => 
    {
      this.appsfromWebservice = data;
    });
  }

  getAppforEdit(appid)
  {
    this.app = []; 
      this.rest.getApp(appid).subscribe((data:Array<Application>) => 
      {
        this.app = data; 
      });
  }

  getFeaturesforApp(appid)
  {
    this.featureForApp = [];
    this.rest.getFeatures(appid).subscribe((data:Array<Feature>) => 
    {
      this.featureForApp = data;
    });
    
  }

  clickFeature(featureid)
  {
    let rest = []
      var id = this.deletedFeatures.lastIndexOf(featureid);
      if(id <= -1)
        {
          this.deletedFeatures.push(featureid);
        }
        else
        {
          this.deletedFeatures.splice(id,1)
        }
    console.log(this.deletedFeatures); 
  }


  clickCategory(category)
  {
    let rest = []
      var id = this.deletedCategories.lastIndexOf(category);
      if(id <= -1)
      {
        this.deletedCategories.push(category);
      }
      else
      {
        this.deletedCategories.splice(id,1)
      }
  }

  getCatsforApp(appid)
  {
    this.categories = []; 
    this.rest.getCatsfromApp(appid).subscribe((data:Array<Application>) =>
     {
      this.categories = data; 
    });
  }

  getCatsfromApp(id)
  {
    this.catsForApp = []; 
    this.rest.getCatsfromApp(id).subscribe((data:Array<Application>) =>
     {
      this.catsForApp = data; 
    }); 
  }

  getFeaturesfromWebservice()
  {
    this.featuresFromWebservice = [];  
    this.rest.getAllFeatures().subscribe((data: {}) => 
    {
      this.featuresFromWebservice = data;
    });
  }

  getCatsfromWebservice()
  {
    this.catsFromWebservice = [];  
    this.rest.getAllCats().subscribe((data:  Array<Category>) => 
    {
      this.catsFromWebservice = data;
    });
  }

  editfeatures()
  {
    this.editfeature = !this.editfeature; 
  }

  editcats()
  {
    this.editcat = !this.editcat; 
  }

  updateTool(json)
  {
    this.rest.updateTool(JSON.stringify(json)).subscribe((data: {}) =>
    {
          console.log(data); 
    }); 
  }

  deleteTool(toolID)
  {
    this.rest.deleteTool(toolID).subscribe((data: {}) =>
    {
      console.log(data); 
    }); 
  }

}


