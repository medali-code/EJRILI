import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store, select } from '@ngrx/store';
import { AuthState } from 'src/app/reduiser/auth.reducer';

@Component({
  selector: 'app-mesdemandes',
  templateUrl: './mesdemandes.component.html',
  styleUrls: ['./mesdemandes.component.css'],
})
export class MesdemandesComponent implements OnInit {
  user: any;
  apiUrl = 'http://localhost:3000/api'; // Replace with your API URL
  demandes: any[] = [];

  constructor(private http: HttpClient, private store: Store<AuthState>) {}

  ngOnInit() {
    this.store.pipe(select((state) => state.user)).subscribe((user) => {
      console.log(user);

      this.user = user;
    });
    this.fetchDemandes();
  }

  removeDemande(id: number) {
    this.http.delete<any>(`${this.apiUrl}/demandes/${id}`).subscribe(
      (response) => {
        console.log(response.message);
        this.fetchDemandes();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  fetchDemandes() {
    this.http
      .get<any>(`${this.apiUrl}/demandes/user/${this.user.user.uid}`)
      .subscribe(
        (response) => {
          this.demandes = response;
          console.log(this.demandes);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
