import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthState } from 'src/app/reduiser/auth.reducer';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  user?: any;
  constructor(
    private store: Store<AuthState>,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.store.pipe(select((state) => state.user)).subscribe((user) => {
      console.log(user);

      this.user = user;
    });
  }
  SignOut() {
    console.log('logout');

    this.authService.SignOut();
  }
}
