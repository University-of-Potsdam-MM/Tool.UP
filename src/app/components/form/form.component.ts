import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { generateExpandoInstructionBlock } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit 
{
  i = 0; 
  myForm: FormGroup; 
  catsFromWebservice:Array<Category>= [];  
  constructor(private fb: FormBuilder, public rest:DataService, private route: ActivatedRoute, private router: Router) { }
  featuresFromWebservice:any = []; 
  appsfromWebservice:any = []; 

  //unusedFeatures:any = [];
  //filteredFeatures:any = [];
  //lastaddedFeature;
  values:any = []; 
  testtest:any = []; 
  

  ngOnInit() 
  {
    this.getFeaturesfromWebservice(); 
    this.getCatsfromWebservice(); 
    this.getappsfromWebservice(); 

    this.myForm = this.fb.group(
    {
      uuid: '' , 
      title: '', 
      description: '', 
      shortDescription: '', 
      contact: '', 
      provider:'', 
    //  features: this.fb.array([]), 
    // kategorien: this.fb.array([])
    }); 

    this.myForm.valueChanges.subscribe(console.log);
    console.log(this.generateInserId()); 

  }

  
  get cats() {
    return this.myForm.get('kategorien') as FormArray; 
  }

  
  /*onChanges(): void {
    this.myForm.get("features").valueChanges.subscribe(val => { 
      /*
      this.lastaddedFeature = val[val.length-1].id;

      let features = this.unusedFeatures
      this.filteredFeatures = [];

      for(let feature of features){
        if (feature.id !== this.lastaddedFeature){
          this.filteredFeatures.push(feature);
        }
      }

      this.unusedFeatures = this.filteredFeatures;
      console.log(this.filteredFeatures); 
    });
  }
*/

  generateInserId()
  {
      function sortNumber(a,b)
    {
        return a - b;
    }

  let splitedids = []; 
  let ids = []; 
    this.appsfromWebservice.forEach(element => 
    {
      splitedids.push(element.id.split("-"));
    });
    splitedids.forEach(element => 
    {
      ids.push((element[1])); 
    });
    
    ids.sort(sortNumber); 
    let insertID = Number.parseInt(ids[ids.length-1], 10) + 1; 
    return "application-" + insertID; 
  }


  onclick()
  {
   this.addTool(this.myForm.getRawValue()); 
  }
  

  addTool(json)
  {
    this.rest.addTool(JSON.stringify(json)).subscribe((data: {}) =>
        {
          console.log(data); 
        }); 
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
    console.log(features.value); 

  }

  deleteFeature(i)
  {
    this.features.removeAt(i); 
  }
  /*
  onclick()
  {
    console.log(this.myForm.getRawValue().features);
    let features = this.myForm.getRawValue().features; 
    let featuresarr = []; 
    for (let feat of features){
      if (featuresarr.)

    }
    //console.log(features.lenght()); 
    console.log()
    features.forEach(element => 
    {
      featuresarr.push(element.id);
    });
  }*/


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



  getappsfromWebservice()
  {
    this.appsfromWebservice = [];  
    this.rest.getallApp().subscribe((data: {}) => 
    {
      this.appsfromWebservice = data;
      //this.unusedFeatures = data;
      this.myForm.setValue({uuid:this.generateInserId(), title:"", description:"", shortDescription:"", contact:"", provider:""}); 
    });
  }
  

}







