import { Component, OnInit, Input } from '@angular/core';
import { UserService } from "../services/user.service";
import { IUser } from "../model/interfaces";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService) {this.checkLoggedIn(); }

  user : IUser = null;
  @Input() eMail : string = "anonmouse@gmail.com";
  @Input() password : string = "anonmouse";
  ngOnInit(): void {
  }

  checkLoggedIn(){ 
    var userToken = localStorage.getItem("user_token");
    this.userService.getUserWithTokenID(userToken).subscribe((user : IUser)=>{
      this.user = user;
      if(this.user != null)
        location.replace("#");
    })
  }

  login(){
    this.userService.getUserWithLoginInfo(this.eMail,this.password).subscribe((user: IUser)=>{
      this.user = user;
      if(this.user != null){
        this.userService.signIn(user);
      location.replace("#");
      }
    
      else
      alert("Wrong e-mail or password");
    });
  }
}
