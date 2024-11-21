import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-create-cheffer',
  templateUrl: './create-cheffer.component.html',
  styleUrls: ['./create-cheffer.component.css']
})
export class CreateChefferComponent {
  constructor(public authService: AuthService) { }
  SignUp(
    userEmail: string,
    userPwd: string,
    nom: string,
    prenom: string,
    ville: string,
    cin: string,
  ) {
    this.authService.SignUpgaragisgte(
      prenom,
      nom,
      cin,
      userEmail,
      ville,
      userPwd,
      'C');
  }
}
