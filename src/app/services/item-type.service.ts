import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { productBaseUrl } from "../base-url";



@Injectable({
  providedIn: 'root'
})
export class ItemTypeService {

  constructor(private http: HttpClient) { }

  baseUrl : string = productBaseUrl +"/item-types";
  
  public getType(name : string): Observable<any> {
 
    return this.http
          .get<any>(this.baseUrl + "/find/" + name)
          .pipe(catchError(this.handleError));

  }

  public getAllParentType() : Observable<any[]>{

    return this.http
          .get<any[]>(this.baseUrl+ "/get/parent-types")
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
