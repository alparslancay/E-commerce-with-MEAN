import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { productBaseUrl } from "../base-url";
import { IItemType } from "../model/interfaces";



@Injectable({
  providedIn: 'root'
})
export class ItemTypeService {

  constructor(private http: HttpClient) { }

  baseUrl : string = productBaseUrl +"/item-types";
  
  public getType(name : string): Observable<IItemType> {
 
    return this.http
          .get<IItemType>(this.baseUrl + "/find/" + name)
          .pipe(catchError(this.handleError));

  }

  public getAllParentType() : Observable<IItemType[]>{

    return this.http
          .get<IItemType[]>(this.baseUrl+ "/get/parent-types")
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
