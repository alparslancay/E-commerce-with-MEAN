import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { productBaseUrl } from "../base-url";


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  baseUrl : string = productBaseUrl + "/items";
  
  public allProducts(id : string): Observable<any[]> {
    return this.http
          .get<any[]>(this.baseUrl + "/find/" + id)
          .pipe(map((items: any[]) => {
            return items;
          }),
            catchError(this.handleError));

  }

  public getCount(id : string): Observable<any> {
    return this.http
          .get<any[]>(this.baseUrl + "/count/" + id)
          .pipe(map((items: any) => {
            return items;
          }),
            catchError(this.handleError));

  }

  public getNewItems(sortValue : Number, itemLimit : Number) : Observable<any[]>{
    
    return this.http
    .get<any[]>(this.baseUrl + "/get/" + sortValue + "/" + itemLimit)
    .pipe(map((items: any[]) => {
      return items;
    }),
      catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      let errMessage = error.error.message;
      return observableThrowError(errMessage);
    }
    return observableThrowError(error || 'Node.js server error');
  }
}
