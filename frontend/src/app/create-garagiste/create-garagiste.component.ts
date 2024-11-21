import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-garagiste',
  templateUrl: './create-garagiste.component.html',
  styleUrls: ['./create-garagiste.component.css']
})
export class CreateGaragisteComponent {
  constructor(public authService: AuthService) { }
  SignUp(
    userEmail: string,
    userPwd: string,
    nom: string,
    prenom: string,
    ville: string,
    cin: string,
  ) {
    this.authService.SignUpchouff(
      prenom,
      nom,
      cin,
      userEmail,
      ville,
      userPwd,
      'G');
  }
}
