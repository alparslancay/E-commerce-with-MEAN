import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { productBaseUrl } from "../base-url";
import { IItem } from "../model/interfaces";


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  baseUrl : string = productBaseUrl + "/items";
  
  public allProducts(id : string): Observable<IItem[]> {
    return this.http
          .get<IItem[]>(this.baseUrl + "/find/" + id)
          .pipe(map((items: IItem[]) => {
            return items;
          }),
            catchError(this.handleError));

  }

  public getCount(id : string): Observable<number> {
    return this.http
          .get<number>(this.baseUrl + "/count/" + id)
          .pipe(map((count: number) => {
            return count;
          }),
            catchError(this.handleError));

  }

  public getNewItems(sortValue : Number, itemLimit : Number) : Observable<IItem[]>{
    
    return this.http
    .get<IItem[]>(this.baseUrl + "/get/" + sortValue + "/" + itemLimit)
    .pipe(map((items: IItem[]) => {
      return items;
    }),
      catchError(this.handleError));
  }

  public getPublisherItems(publisherID : string) : Observable<IItem[]>{

    return this.http
    .get<IItem[]>(this.baseUrl + "/publisher/" + publisherID)
    .pipe(map((items : IItem[]) => {
      return items;
    }),
      catchError(this.handleError));
  }

  public deleteItem(itemID : string) : Observable<IItem>{
    return this.http
          .get<IItem>(this.baseUrl+ "/delete/"+itemID)
          .pipe(catchError(this.handleError));
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
