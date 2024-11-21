import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SignInAction, SignOutAction } from '../actions/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userData: any; // Save logged in user data
  apiUrl = 'http://localhost:3000/api'; // Replace with your API URL

  constructor(
    private http: HttpClient,
    private router: Router,
    private store: Store
  ) { }

  // Sign in with email/password
  SignIn(email: string, password: string) {
    const signInData = { email, password };

    this.http.post<any>(`${this.apiUrl}/user/signin`, signInData).subscribe(
      (result) => {
        console.log(result);

        this.store.dispatch(SignInAction({ payload: result }));
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
        window.alert('Email or password is incorrect');
      }
    );
  }

  // Sign up with email/password
  SignUp(
    prenom: string,
    nom: string,
    cin: string,
    userEmail: string,
    ville: string,
    userPwd: string,
    type: string,
    telephone: string
  ) {
    const signUpData = {
      prenom,
      nom,
      cin,
      userEmail,
      ville,
      userPwd,
      type,
      telephone
    };
    console.log(signUpData);


    this.http.post<any>(`${this.apiUrl}/user/signup`, signUpData).subscribe(
      (response) => {
        if (response && response.message === 'Registration successful') {
          // Handle success
          this.router.navigate(['CONNEXION']);
        } else {
          console.log(response);
        }
      },
      (error) => {
        window.alert(error.message);
      }
    );
  }
  SignUpgaragisgte(
    prenom: string,
    nom: string,
    cin: string,
    userEmail: string,
    ville: string,
    userPwd: string,
    type: string
  ) {
    const signUpData = {
      prenom,
      nom,
      cin,
      userEmail,
      ville,
      userPwd,
      type,
    };

    this.http.post<any>(`${this.apiUrl}/user/signup`, signUpData).subscribe(
      (response) => {
        if (response && response.message === 'Registration successful') {
          // Handle success
          this.router.navigate(['admin']);
        } else {
          console.log(response);
        }
      },
      (error) => {
        window.alert(error.message);
      }
    );
  }

  SignUpchouff(
    prenom: string,
    nom: string,
    cin: string,
    userEmail: string,
    ville: string,
    userPwd: string,
    type: string
  ) {
    const signUpData = {
      prenom,
      nom,
      cin,
      userEmail,
      ville,
      userPwd,
      type,
    };

    this.http.post<any>(`${this.apiUrl}/user/signup`, signUpData).subscribe(
      (response) => {
        if (response && response.message === 'Registration successful') {
          // Handle success
          this.router.navigate(['admin']);
        } else {
          console.log(response);
        }
      },
      (error) => {
        window.alert(error.message);
      }
    );
  }

  SignOut() {
    this.store.dispatch(SignOutAction());
    this.router.navigate(['/accueil']);
  }
  /*  // Reset Forgot password
  async ForgotPassword(passwordResetEmail: string) {
    const resetData = { email: passwordResetEmail };
    try {
      await this.http.post<any>(`${this.apiUrl}/forgot-password`, resetData);
      window.alert('Password reset email sent, check your inbox.');
    } catch (error) {
      window.alert(error);
    }
  }

  // Returns true when user is logged in
  get isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token !== null;
  }

  // Sign out
/*   SignOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);
  } */
}
