import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class CONTACTComponent {
  // add avis in db
  apiUrl = 'http://localhost:3000/api'; // Replace with your API URL

  constructor(private router: Router, private http: HttpClient) { }

  addAvis(text: string, email: string, emetteur: string) {
    this.http
      .post<any>(`${this.apiUrl}/avis/donneAvis`, {
        email,
        text,
        emetteur,
      })
      .subscribe(
        (response) => {
          console.log(response);
          // Handle the response as needed
          this.router.navigate(['accueil']);
        },
        (error) => {
          console.error(error);
          // Handle the error as needed
        }
      );
  }
}
