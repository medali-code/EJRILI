import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthState } from '../reduiser/auth.reducer';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-mescammions',
  templateUrl: './mescammions.component.html',
  styleUrls: ['./mescammions.component.css']
})
export class MescammionsComponent {
  cammions: any[] = []
  user: any;
  apiUrl = 'http://localhost:3000/api'; // Replace with your API URL

  constructor(private http: HttpClient, private store: Store<AuthState>) { }

  ngOnInit() {
    this.store.pipe(select((state) => state.user)).subscribe((user) => {
      console.log(user);

      this.user = user;
    });
    this.fetchCammions();
  }

  removeCammions(id: number) {
    this.http.delete<any>(`${this.apiUrl}/cammion/${id}`).subscribe(
      (response) => {
        console.log(response.message);
        this.fetchCammions();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  fetchCammions() {
    this.http
      .get<any>(`${this.apiUrl}/cammion/user/${this.user.user.uid}`)
      .subscribe(
        (response) => {
          this.cammions = response;
          console.log(this.cammions);
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
