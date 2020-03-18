import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { productBaseUrl } from "../base-url";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL : string = productBaseUrl + "/users";
  constructor(private http : HttpClient) { 
    var tokenID = localStorage.getItem("user");

  }

  public getUserWithTokenID(tokenID : any): Observable<any> {

    return this.http.get<any>(this.baseURL + '/find/tokenID/' + tokenID)
      .pipe(catchError(this.handleError));

  }

  public updateUser(user : any) : Observable<any>{

    return this.http.put(this.baseURL+'/update/'+ user._id,user);
  }


  public getUserWithLoginInfo(eMail : string, password : string) : Observable<any>{
    return this.http.get<any>(this.baseURL + '/find/e-mail/' + eMail + '/password/'+ password)
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
