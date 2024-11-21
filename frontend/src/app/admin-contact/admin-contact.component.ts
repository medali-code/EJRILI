import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css'],
})
export class AdminContactComponent {
  apiUrl = 'http://localhost:3000/api'; // Replace with your API URL
  avis: any;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.fetchAvis();
  }

  removeAvis(id: number) {
    this.http.delete<any>(`${this.apiUrl}/avis/${id}`).subscribe(
      (response) => {
        console.log(response.message);
        this.fetchAvis();
      },
      (error) => {
        console.error(error);
      }
    );
  }


  removegragiste(id: number) {
    this.http.delete<any>(`${this.apiUrl}/user/${id}`).subscribe(
      (response) => {
        console.log(response.message);
        this.fetchAvis();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  fetchAvis() {
    this.http.get<any>(`${this.apiUrl}/avis`).subscribe(
      (response) => {
        this.avis = response;
        console.log(this.avis);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
