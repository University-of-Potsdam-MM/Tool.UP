import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';


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

  getAllCats(): Observable<any>
  {
    return this.http.get(endpoint + 'category').pipe(
      map(this.extractData));
  }

  getCatbyID(catID): Observable<any>
  {
    return this.http.get(endpoint + 'category/' + catID).pipe(
      map(this.extractData));
  }

  getTopLevelCats(): Observable<any>
  {
    return this.http.get(endpoint + 'category/toplevel').pipe(
      map(this.extractData));
  }

  getAllFeatures()
  {
    return this.http.get(endpoint + 'feature').pipe(
      map(this.extractData));
  }

  getFeature(featureId)
  {
    return this.http.get(endpoint + 'feature/' + featureId).pipe(
      map(this.extractData));
  }


/*getTopLevelCats(): Observable<any>
  {
    return this.http.get(endpoint + 'category/toplevel').map(response => response.json())
  }*/





  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }



}


