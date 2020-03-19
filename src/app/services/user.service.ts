import { Injectable } from '@angular/core';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { productBaseUrl } from "../base-url";
import { IUser } from "../model/interfaces";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL : string = productBaseUrl + "/users";
  constructor(private http : HttpClient) { 
    var tokenID = localStorage.getItem("user");

  }

  public getUserWithTokenID(tokenID : string): Observable<IUser> {
 
    return this.http.get<IUser>(this.baseURL + '/find/tokenID/' + tokenID)
      .pipe(catchError(this.handleError));

  }

  public updateUser(user : IUser) : Observable<IUser>{

    return this.http.put(this.baseURL+'/update/'+ user._id,user);
  }

  public signOut() : void{
    localStorage.removeItem("user_token");
  }

  public signIn(user : IUser) : void{
    window.localStorage.setItem("user_token",user.user_token);
  }

  public addUser(user : IUser) : Observable<IUser>{
    return this.http.post(this.baseURL+'/add/data',user);
  }


  public getUserWithLoginInfo(eMail : string, password : string) : Observable<IUser>{
    return this.http.get<IUser>(this.baseURL + '/find/e-mail/' + eMail + '/password/'+ password)
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
