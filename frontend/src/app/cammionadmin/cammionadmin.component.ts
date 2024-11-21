import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cammionadmin',
  templateUrl: './cammionadmin.component.html',
  styleUrls: ['./cammionadmin.component.css']
})
export class CammionadminComponent {

  user: any;
  apiUrl = 'http://localhost:3000/api'; // Replace with your API URL
  data: any[] = [];

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {

    this.fetchAllcamion();
  }

  removecammion(id: number) {
    this.http.delete<any>(`${this.apiUrl}/cammion/${id}`).subscribe(
      (response) => {
        console.log(response.message);
        this.fetchAllcamion();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  fetchAllcamion() {
    this.http
      .get<Array<any>>(
        `${this.apiUrl}/cammion`
      )
      .subscribe(
        (cammions) => {
          this.data = cammions

        },
        (error) => {
          console.error(error);
        }
      );
  }
}
