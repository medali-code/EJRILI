import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AuthState } from 'src/app/reduiser/auth.reducer';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css'],
})
export class GARAGEComponent implements OnInit {
  apiUrl = 'http://localhost:3000/api'; // Replace with your API URL
  intervention: any[] = [];
  user: any

  constructor(private http: HttpClient, private router: Router, private store: Store<AuthState>) { }

  ngOnInit() {

    this.store.pipe(select((state) => state.user)).subscribe((user) => {
      console.log(user);

      this.user = user;
    });

    this.fetchIntervention();
  }

  sendtocreateinv() {

    this.router.navigate(['/CreateIntervention']);
  }

  fetchIntervention() {
    this.http.get<Array<any>>(`${this.apiUrl}/interventions/user/${this.user.user.uid}`).subscribe(
      (response) => {
        const array = new Array()
        response.map((data) => {
          this.http.get<any>(`${this.apiUrl}/demandes/${data.demandesId}`).subscribe(
            (demende) => {
              array.push({ demendes: demende, interventions: data })
            },
            (error) => {
              console.error(error);
            }
          );
        });
        this.intervention = array;

      },
      (error) => {
        console.error(error);
      }
    );
  }


  removeintervention(id: number) {
    this.http.delete<any>(`${this.apiUrl}/interventions/${id}`).subscribe(
      (response) => {
        console.log(response.message);
        this.fetchIntervention();
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
