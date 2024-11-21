import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { SignInAction } from 'src/app/actions/auth.actions';
import { AuthState } from 'src/app/reduiser/auth.reducer';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent {
  user: any;

  constructor(
    private http: HttpClient, private store: Store<AuthState>
  ) { }

  ngOnInit() {
    this.store.pipe(select((state) => state.user)).subscribe((user) => {
      console.log(user);

      this.user = user.user;
    });
  }

  update(nom: string, prenom: string, email: string, cin: string, ville: string, telephone: string) {
    const apiUrl = `http://localhost:3000/api/user/editprofile/${this.user.uid}`; // Update the API endpoint URL accordingly
    this.http.put(apiUrl, { nom: nom == "" ? this.user.nom : nom, email: email == "" ? this.user.email : email, prenom: prenom == "" ? this.user.prenom : prenom, cin: cin == "" ? this.user.cin : cin, ville: ville == "" ? this.user.ville : ville, telephone: telephone == "" ? this.user.telephone : telephone, })
      .subscribe(
        (response) => {
          // Handle the successful response, e.g., show a success message
          console.log('Profile updated successfully:', response);
          this.store.dispatch(SignInAction({ payload: response }));

        },
        (error) => {
          // Handle the error response, e.g., show an error message
          console.error('Error updating profile:', error);
        }
      );
  }


}

