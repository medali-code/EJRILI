import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AuthState } from 'src/app/reduiser/auth.reducer';

@Component({
  selector: 'app-remorquage',
  templateUrl: './remorquage.component.html',
  styleUrls: ['./remorquage.component.css'],
})
export class REMORQUAGEComponent implements OnInit {
  user: any;
  apiUrl = 'http://localhost:3000/api'; // Replace with your API URL
  remorquage: any[] = [];
  camion: any;

  interval: any;

  constructor(private http: HttpClient, private store: Store<AuthState>) { }

  ngOnInit() {
    this.store.pipe(select((state) => state.user)).subscribe((user) => {
      console.log(user);

      this.user = user;
      this.http
        .get<Array<any>>(`${this.apiUrl}/cammion`)
        .subscribe(
          (response) => {
            this.camion = response;
          },
          (error) => {
            console.error(error);
          }
        );

    });
    this.startFetchingPendingDemandes();
  }
  stopFetchingPendingDemandes() {
    // Clear the interval to stop fetching
    clearInterval(this.interval);
  }
  startFetchingPendingDemandes() {
    // Immediately fetch pending demandes
    this.fetchPendingDemandes();

    // Run fetchPendingDemandes() every 10 seconds
    this.interval = setInterval(() => {
      this.fetchPendingDemandes();
    }, 10000);
  }
  fetchPendingDemandes() {
    this.http.get<Array<any>>(`${this.apiUrl}/demandes`).subscribe(
      (response) => {
        const pendingDemandes = response.filter(
          (Demande) => Demande.Etat == 'P' && Demande.valid == true
        );
        console.log(pendingDemandes);
        const array = new Array();

        pendingDemandes.forEach((Demande) => {
          this.http
            .get<Array<any>>(`${this.apiUrl}/user/${Demande.userUid}`)
            .subscribe(
              (response) => {
                array.push({ Demande, user: response });
              },
              (error) => {
                console.error(error);
              }
            );
        });
        if (this.remorquage !== array) {
          this.remorquage = array;
        }
        console.log(array);

      },
      (error) => {
        console.error(error);
      }
    );
  }

  accepterDemandes(demandesId: number, cammionsId: string) {
    console.log(cammionsId);

    this.http
      .put<any>(`${this.apiUrl}/demandes/accepter`, {
        demandesId,
        cammionsId,
        userUid: this.user.user.uid,
      })
      .subscribe(
        (response) => {
          this.fetchPendingDemandes();
        },
        (error) => {
          console.error(error);
        }
      );
  }
  ngOnDestroy() {
    this.stopFetchingPendingDemandes();
  }
}
