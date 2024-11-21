import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthState } from '../reduiser/auth.reducer';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-create-intervention',
  templateUrl: './create-intervention.component.html',
  styleUrls: ['./create-intervention.component.css'],
})
export class CreateInterventionComponent implements OnInit {
  apiUrl = 'http://localhost:3000/api';
  user?: any;
  demandes?: any;
  demandesId: number = -1;

  // Replace with your API URL
  interventionData = {
    Date: '',
    Type: '',
    Description: '',
    demandesId: ''
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,

    private store: Store<AuthState>
  ) { }

  ngOnInit() {
    this.store.pipe(select((state) => state.user)).subscribe((user) => {
      console.log(user);

      this.user = user;
    });
    this.http
      .get<Array<any>>(`${this.apiUrl}/demandes`)
      .subscribe(
        (response) => {
          this.demandes = response.filter((Demande) => Demande.Etat === 'R');
          console.log(this.demandes);

        },
        (error) => {
          console.error(error);
        }
      );

  }

  getCurrentDate(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  createIntervention() {
    this.http
      .post<any>(`${this.apiUrl}/interventions`, {
        ...this.interventionData, garageId: this.user.user.uid,
      })
      .subscribe(
        (createdIntervention) => {
          console.log('Intervention created:', createdIntervention);
          // Reset the form
          this.interventionData = {
            Date: '',
            Type: '',
            Description: '',
            demandesId: ''
          };

          this.router.navigate(['GARAGE']);
        },
        (error) => {
          console.error('Error creating intervention:', error);
        }
      );
  }
}
