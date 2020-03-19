import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { IUser, Role } from "../model/interfaces";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService : UserService) { }

  password : string = "anonymous";
  checkingPassword : string = "anonymous";
  eMail : string = "anonymous@gmail.com";
  checkingEMail : string = "anonymous@gmail.com";
  customerFullName : string = "anonymous ANONYMOUS";

  ngOnInit(): void {
  }

  register() : void{

    if(this.checkInputValues()){
      let user : IUser = {
        e_mail : this.eMail,
        name : this.customerFullName,
        password : this.password,
        role : Role.USER
      }
    this.userService.addUser(user).subscribe();
    alert("You are register successfully, you are redirecting login page!");
    location.replace('/login');
    }

    else
      alert("You entered wrong value");
  }

  checkInputValues() : boolean{
    return this.password.length > 8 && 
    this.password == this.checkingPassword &&
    this.eMail.length > 10 &&
    this.eMail == this.checkingEMail;
  }
  
}
