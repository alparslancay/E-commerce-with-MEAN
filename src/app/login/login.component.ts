import { Component, OnInit, Input } from '@angular/core';
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService : UserService) {this.checkLoggedIn(); }

  errorMessage = "";
  eMailError = "";
  user : any = null;
  @Input() eMail : string = "anonmouse@gmail.com";
  @Input() password : string = "anonmouse";
  ngOnInit(): void {
  }

  checkLoggedIn(){ 
    var userToken = localStorage.getItem("user_token");
    this.userService.getUserWithTokenID(userToken).subscribe((user : any)=>{
      this.user = user;
      if(this.user != null)
        location.replace("#");
    })
  }

  login(){
    this.userService.getUserWithLoginInfo(this.eMail,this.password).subscribe((user: any)=>{
      this.user = user;
      if(this.user != null){
      window.localStorage.setItem("user_token",this.user.user_token);
      location.replace("#");
      }
    
      else
      alert("Wrong e-mail or password");
    });
  }
}
