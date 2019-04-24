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
    //POST Updatet Values into Database and reload Page


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


   // this.features.push(JSON.parse('{"id":"feature-19999"}')); 
    }


  deleteFeature(i)
  {
    this.features.removeAt(i); 
  }

  onclick()
  {
    this.clicked = true; 
    //console.log(this.ToolSelection.getRawValue().selection); 
    this.getAppforEdit(this.ToolSelection.getRawValue().selection); 
    this.getFeaturesforApp(this.ToolSelection.getRawValue().selection);
    this.getCatsfromApp(this.ToolSelection.getRawValue().selection)
    
    //this.features.push("feature-999999"); 
    
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
          //nicht enthalten also hinzufügen
          this.deletedFeatures.push(featureid);
        }
        else
        {
          //ist enthalten
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
          //nicht enthalten also hinzufügen
          this.deletedCategories.push(category);
        }
        else
        {
          //ist enthalten
          this.deletedCategories.splice(id,1)
        }
    console.log(this.deletedCategories); 

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
      console.log(data); 
    }); 
  }

  getFeaturesfromWebservice()
  {
    this.featuresFromWebservice = [];  
    this.rest.getAllFeatures().subscribe((data: {}) => 
    {
      this.featuresFromWebservice = data;
      //this.unusedFeatures = data;
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


}


