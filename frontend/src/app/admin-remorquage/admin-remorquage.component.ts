import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-remorquage',
  templateUrl: './admin-remorquage.component.html',
  styleUrls: ['./admin-remorquage.component.css'],
})
export class AdminREMORQUAGEComponent {
  user: any;
  apiUrl = 'http://localhost:3000/api'; // Replace with your API URL
  demandes: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
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

  AccepteDemande(demandesId: number) {
    this.http
      .put<any>(`${this.apiUrl}/demandes/valide`, {
        demandesId,
      })
      .subscribe(
        (response) => {
          this.fetchDemandes();
        },
        (error) => {
          console.error(error);
        }
      );
  }

  fetchDemandes() {
    this.http.get<any>(`${this.apiUrl}/demandes`).subscribe(
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
