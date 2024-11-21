import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AuthState } from 'src/app/reduiser/auth.reducer';
@Component({
  selector: 'app-mesremorquages',
  templateUrl: './mesremorquages.component.html',
  styleUrls: ['./mesremorquages.component.css'],
})
export class MesremorquagesComponent implements OnInit {
  user: any;
  apiUrl = 'http://localhost:3000/api'; // Replace with your API URL
  demandes: any[] = [];

  constructor(
    private http: HttpClient,
    private store: Store<AuthState>,
    private router: Router
  ) { }

  ngOnInit() {
    this.store.pipe(select((state) => state.user)).subscribe((user) => {
      console.log(user);

      this.user = user;
    });
    this.fetchMesRemorquages();
  }

  /*   sendtocreateinv(demandeId: number) {
      console.log(demandeId);
  
      this.router.navigate(['/CreateIntervention', demandeId]);
    } */

  terminalRemorquage(demandeId: number) {
    this.http.put<any>(`${this.apiUrl}/demandes/terminal`, { demandeId }).subscribe(
      (response) => {
        this.fetchMesRemorquages();

      },
      (error) => {
        console.error(error);
      }
    );
  }

  removeDemande(id: number) {
    this.http.delete<any>(`${this.apiUrl}/demandes/${id}`).subscribe(
      (response) => {
        console.log(response.message);
        this.fetchMesRemorquages();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  fetchMesRemorquages() {
    this.http
      .get<Array<any>>(
        `${this.apiUrl}/demandes/MesRemorquages/${this.user.user.uid}`
      )
      .subscribe(
        (response) => {
          const array = new Array();
          response.forEach((Demande) => {
            this.http
              .get<Array<any>>(`${this.apiUrl}/user/${Demande.userUid}`)
              .subscribe(
                (response) => {
                  this.http
                    .get<Array<any>>(`${this.apiUrl}/cammion/${Demande.cammionsId}`)
                    .subscribe(
                      (camiondata) => {
                        array.push({ Demande, user: response, camion: camiondata });
                      },
                      (error) => {
                        console.error(error);
                      }
                    );
                },
                (error) => {
                  console.error(error);
                }
              );
          });
          this.demandes = array;
          console.log(array)
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
