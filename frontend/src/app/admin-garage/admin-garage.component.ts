import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-garage',
  templateUrl: './admin-garage.component.html',
  styleUrls: ['./admin-garage.component.css'],
})
export class AdminGARAGEComponent {


  apiUrl = 'http://localhost:3000/api'; // Replace with your API URL
  Users: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.fetchUsers();
  }


  removegragiste(id: number) {
    this.http.delete<any>(`${this.apiUrl}/user/${id}`).subscribe(
      (response) => {
        console.log(response.message);
        this.fetchUsers();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  sendtocreategri() {

    this.router.navigate(['CREATEGragiste']);
  }

  fetchUsers() {
    this.http.get<Array<any>>(`${this.apiUrl}/user`).subscribe(
      (response) => {

        this.Users = response.filter((User) => User.type === "G");
        console.log(this.Users);

      },
      (error) => {
        console.error(error);
      }
    );
  }
}
