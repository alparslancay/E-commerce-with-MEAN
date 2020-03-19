import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class CollectionCommonService {

  constructor(private http: HttpClient) { }

  public allProducts(baseUrl : string): Observable<any[]> {
    return this.http
          .get<any[]>(baseUrl)
          .pipe(map((items: any[]) => {
            return items;
          }),
            catchError(this.handleError));

  }

  public getProduct(baseUrl : string , id : string): Observable<any[]> {
    return this.http.get<any>(baseUrl + '/' + id)
      .pipe(catchError(this.handleError));

  }

  public getProductCount(baseUrl : string) : Observable<number>{
    return this.http.get<number>(baseUrl + '/find/count')
    .pipe(catchError(this.handleError));
  }

  public updateProduct(baseUrl : string, item : any) : Observable<any>{
    return this.http.put(baseUrl + '/update/' + item._id , item)
    .pipe(catchError(this.handleError));
  }

  public addProduct(baseUrl : string, item : any) : Observable<any>{
    return this.http.post(baseUrl +'/add/data', item)
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
