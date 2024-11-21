import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(public authService: AuthService) { }
  SignUp(
    userEmail: string,
    userPwd: string,
    nom: string,
    prenom: string,
    ville: string,
    cin: string,
    telephone: string
  ) {
    this.authService.SignUp(
      prenom,
      nom,
      cin,
      userEmail,
      ville,
      userPwd,
      'U', telephone);
  }
}
