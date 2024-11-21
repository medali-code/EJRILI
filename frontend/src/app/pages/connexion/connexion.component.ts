import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent {
  constructor(public authService: AuthService) {}
  SignIn(userEmail: string, userPwd: string) {
    this.authService.SignIn(userEmail, userPwd);
  }
}
