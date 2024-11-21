import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css'],
})
export class AdminUsersComponent {
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
  sendtocreatechff() {

    this.router.navigate(['CREATEchff']);
  }

  fetchUsers() {
    this.http.get<Array<any>>(`${this.apiUrl}/user`).subscribe(
      (response) => {
        this.Users = response.filter((User) => User.type === "C");;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
