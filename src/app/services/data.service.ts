import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Category } from 'src/app/interfaces/category';
import { Application } from '../interfaces/application';


const endpoint = 'http://localhost:8080/toolup/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(public http:HttpClient)
  {
    console.log('DataService Connected')
  }

  private extractData(res: Response)
  {
    let body = res;
    return body || { };
  }

  private extractCategory(res: Category) {

    // transforms array in parsed array of json objects
    let subCat = res.subCategories;
    let subCatArr = [];

    subCat.forEach(subcat => {
      subCatArr.push(JSON.parse(subcat));
    });
    res.subCategories = subCatArr;
    
    let body = res;
    console.log(body); 
    return body || { };
  }

  private extractApps(res: Category) {

    // transforms array in parsed array of json objects
    let apps = res.applications;
    let appsArr = [];

    apps.forEach(apps => {
      appsArr.push(JSON.parse(apps));
    });
    res.applications = appsArr;
    let body = res;
    console.log(body); 
    return body || { };
  }

  private extractFeature(res: Application) {
    let features = res.features; 
    let featuresArr = []; 

    features.forEach(features => {
      featuresArr.push(JSON.parse(features)); 
    }); 
    res.features = featuresArr; 
    let body = res;
    console.log(body); 
    return body || { };
  }

  private extractCatsfromApp(res: Application) {
    let cats = res.categories; 
    let catsarr = []; 

    cats.forEach(cats => {
      catsarr.push(JSON.parse(cats)); 
    }); 
    res.categories = catsarr; 
    let body = res;
    console.log(body); 
    return body || { };
  }


  getCatsfromApp(appid)
  {
    return this.http.get<Application>(endpoint + 'application/' + appid).pipe(
      map(this.extractCatsfromApp));
  }

  getFeatures(appid)
  {
    return this.http.get<Application>(endpoint + 'application/' + appid).pipe(
      map(this.extractFeature));
  }

  getAllCats(): Observable<any> {
    return this.http.get(endpoint + 'category/withApplication').pipe(
      map(this.extractData));
  }

  getAllFeatures()
  {
    return this.http.get(endpoint + 'feature').pipe(
      map(this.extractData));
  }

  
  getApps(catID)
  {
      return this.http.get<Category>(endpoint + 'category/' + catID).pipe(
        map(this.extractApps)); 
  }


  getApp(appID): Observable<any>
  {
      return this.http.get(endpoint + 'application/' + appID).pipe(
        map(this.extractData)); 
  }


  getCatbyID(catID): Observable<any> {
    return this.http.get<Category>(endpoint + 'category/' + catID).pipe(
      map(this.extractCategory));
  }

  getTopLevelCats(): Observable<any> {
    return this.http.get<Category[]>(endpoint + 'category/toplevel');
  }

  private handleError<T> (operation = 'operation', result?: T)
   {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  lookup(data:string): Observable<any>
  {
    console.log(data); 
    return this.http.post(endpoint + "lookup", data).pipe();

  }

}
