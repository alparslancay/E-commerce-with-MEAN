import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl: string = 'http://localhost:5000/api/mobilGames';

  public constructor(
    private http: HttpClient
    ) {}

  public allProducts(): Observable<any[]> {
    return this.http
          .get<any[]>(this.baseUrl)
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
      // Use the following instead if using lite-server
      //return Observable.throw(err.text() || 'backend server error');
    }
    return observableThrowError(error || 'Node.js server error');
  }
}
