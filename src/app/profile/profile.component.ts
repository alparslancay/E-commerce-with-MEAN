import { Component, OnInit, Input } from '@angular/core';
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() currentEMail : string = null;
  @Input() newEMail : string = "anonmouse@gmail.com";
  @Input() confirmationPassword : string = "anonmouse";

  @Input() currentPassword : string = "anonmouse";
  @Input() newPassword : string = "anonmouse";
  @Input() checkingPassword : string = "anonmouse";

 user : any = null;

  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getUserWithTokenID(localStorage.getItem("user_token")).subscribe((user : any)=>{
      this.user = user;
      this.currentEMail = user.e_mail;
    });
  }

  updateUserEMail() : void{
    this.user.e_mail = this.newEMail;
    this.userService.updateUser(this.user).subscribe();
  }

  updateUserPassword() : void{
    this.user.password = this.newPassword;
    this.userService.updateUser(this.user).subscribe();
  }

}
