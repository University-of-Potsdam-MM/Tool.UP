import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Category } from 'src/app/interfaces/category';
import { Application } from '../interfaces/application';
import { RawSource } from 'webpack-sources';
import { Feature } from '../interfaces/feature';


/**
 * Endpoint for API Calls
 */
const endpoint = 'http://localhost:8080/toolup/';


/**
 * Http Options for Getting Values
 */
const httpOptions =
{
  headers: new HttpHeaders(
  {
    'Content-Type':  'application/x-www-form-urlencoded'
  })
};

/**
 * Http Options for Posting Values
 */

const httpOptionsPOST =
{
  headers: new HttpHeaders(
  {
    'Content-Type' : 'application/json',
  })
};


@Injectable(
{
  providedIn: 'root'
})


export class DataService
{

  /**
   * Stores if the user is logged in or not
   */
  public loggin = false;

  constructor(public http:HttpClient){}

  /**
   *
   * @param res Takes the Response from the API Call
   */
  private extractData(res: Response)
  {
    let body = res;
    return body || { };
  }
/**
 *@returns Returns the loggin status
 */
  getloggin()
  {
    return this.loggin;
  }

  /**
   *
   * @param setloggin The login Boolean
   */
  setloggin(setloggin)
  {
    this.loggin = setloggin;
  }

  /**
   *Extracts the Categories from nested JSON
   *
   * @param res The response from the API call as Category
   */
  private extractCategory(res: Category)
  {
    let subCat = res.subCategories;
    let subCatArr = [];

    subCat.forEach(subcat =>
    {
      subCatArr.push(JSON.parse(subcat));
    });

    res.subCategories = subCatArr;

    let body = res;
    return body || { };
  }

/**
 * Extracts the features from an application
 *
 * @param res The response from the API call as Category
 */
  private extractApps(res: Category)
  {

    // transforms array in parsed array of json objects
    let apps = res.applications;
    let appsArr = [];

    apps.forEach(apps =>
    {
      appsArr.push(JSON.parse(apps));
    });

    res.applications = appsArr;
    let body = res;
    //console.log(body);
    return body || { };
  }

  /**
   *Extracts the features from an application
   *
   * @param res The response of the API call as Application
   */
  private extractFeature(res: Application)
  {
    let features = res.features;
    let featuresArr = [];

    features.forEach(features =>
    {
      featuresArr.push(JSON.parse(features));
    });

    res.features = featuresArr;
    let body = res;
    //console.log(body);
    return body || { };
  }

  /**
   *Extracts the categories from an application
   *
   * @param res The response of the API call as Application
   */
  private extractCatsfromApp(res: Application)
  {
    let cats = res.categories;
    let catsarr = [];

    cats.forEach(cats =>
    {
      catsarr.push(JSON.parse(cats));
    });

    res.categories = catsarr;
    let body = res;
    //console.log(body);
    return body || { };
  }

/**
 *Extracts the Apps from an Feature
 * @param res The response from the API call as Feature
 */
  private extractAppsfromFeatures(res: Feature)
  {
    let features = res.applications;
    let featuresarr = [];

    features.forEach(features =>
    {
      featuresarr.push(JSON.parse(features));
    });

    res.applications = featuresarr;
    let body = res;
    //console.log(body);
    return body || { };
  }


  /**
   * @returns Categories from an application
   * @param appid The application id
   * @example GET http://localhost:8080/toolup/application/application-1
   */
  getCatsfromApp(appid)
  {
    return this.http.get<Application>(endpoint + 'application/' + appid).pipe(
      map(this.extractCatsfromApp));
  }

  /**
   * @returns Features from an application
   * @param appid The application id
   * @example GET  http://localhost:8080/toolup/application/application-1/
   */
  getFeatures(appid)
  {
    return this.http.get<Application>(endpoint + 'application/' + appid).pipe(
      map(this.extractFeature));
  }

  /**
   * @returns All categories with an application
   * @example GET http://localhost:8080/toolup/category/withApplication
   */
  getAllCats(): Observable<any> {
    return this.http.get(endpoint + 'category/withApplication').pipe(
      map(this.extractData));
  }

  /**
   * @returns all Features
   * @example GET http://localhost:8080/toolup/feature
   */
  getAllFeatures()
  {
    return this.http.get(endpoint + 'feature').pipe(
      map(this.extractData));
  }

  /**
   * @returns The applications from a feature
   * @param featureid The feature id
   * @example GET http://localhost:8080/toolup/feature/feature-1
   */
  getFeaturebyID(featureid)
  {
    return this.http.get(endpoint + 'feature/' + featureid).pipe(
      map(this.extractAppsfromFeatures));
  }

  /**
   * @returns The applications from an app
   * @param catID The category id
   * @example GET http://localhost:8080/toolup/category/category-1
   */
  getApps(catID)
  {
      return this.http.get<Category>(endpoint + 'category/' + catID).pipe(
        map(this.extractApps));
  }

  /**
   * @returns An application
   * @param appID The applications id
   * @example GET http://localhost:8080/toolup/application/application-1
   */
  getApp(appID): Observable<any>
  {
      return this.http.get(endpoint + 'application/' + appID).pipe(
        map(this.extractData));
  }

  /**
   * @returns All applications
   * @example http://localhost:8080/toolup/application
   */
  getallApp(): Observable<any>
  {
      return this.http.get(endpoint + 'application/').pipe(
        map(this.extractData));
  }

  /**
   * @returns The subcategories from a category
   * @param catID
   */
  getCatbyID(catID): Observable<any>
  {
    return this.http.get<Category>(endpoint + 'category/' + catID).pipe(
      map(this.extractCategory));
  }

  /**
   * @returns all toplevel categories
   *
   */
  getTopLevelCats(): Observable<any>
  {
    return this.http.get<Category[]>(endpoint + 'category/toplevel');
  }

  private handleError<T> (operation = 'operation', result?: T)
   {
    return (error: any): Observable<T> =>
    {

      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  /**
   * @returns Best Matches as Array and Single Matches as Array
   * @param data The array of features as string with comma seperated
   * @example POST http://localhost:8080/toolup/lookup/features=feature1,feature2,feature3
   */
  lookup(data:string): Observable<any>
  {
   // console.log(data);
    return this.http.post(endpoint + "lookup", data, httpOptions).pipe();
  }


  /**
 * @returns Search result matches
 * @param data The search parameter as string
 */
  search(data:string): Observable<any>
  {
   // console.log(data);
    return this.http.post(endpoint + "search", data, httpOptions).pipe();
  }

  /**
 * @param data JSON but in string formatted
*/
  addTool(data:string): Observable<any>
  {
    return this.http.post(endpoint + "application", data, httpOptionsPOST).pipe();
  }

  /**
 *
 * @param data JSON but in string formatted
 */
  updateTool(data:string):Observable<any>
  {
    return this.http.patch(endpoint + "application",  data, httpOptionsPOST).pipe();
  }

/**
 * @param appID Application id as string
 */
  deleteTool(appID:string):Observable<any>
  {
    return this.http.delete(endpoint + 'application/' + appID).pipe();
  }
}

