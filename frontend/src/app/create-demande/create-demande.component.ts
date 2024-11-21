import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AuthState } from '../reduiser/auth.reducer';

@Component({
  selector: 'app-create-demande',
  templateUrl: './create-demande.component.html',
  styleUrls: ['./create-demande.component.css'],
})
export class CreateDemandeComponent implements OnInit {
  demandeForm: FormGroup = this.formBuilder.group({
    Voiture: ['', Validators.required],
    Destination: ['', Validators.required],
    Date: [null, Validators.required],
  });
  apiUrl = 'http://localhost:3000/api'; // Replace with your API URL
  user: any;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private store: Store<AuthState>
  ) { }

  ngOnInit() {
    this.demandeForm = this.formBuilder.group({
      Voiture: ['', Validators.required],
      Destination: ['', Validators.required],
      Date: [null, Validators.required],
    });
    this.store.pipe(select((state) => state.user)).subscribe((user) => {
      console.log(user);

      this.user = user;
    });
  }

  getCurrentDate(): string {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  onSubmit() {
    if (this.demandeForm.invalid) {
      console.log(this.demandeForm);

      return;
    }
    this.http
      .post<any>(`${this.apiUrl}/demandes`, {
        ...this.demandeForm.value,
        userUid: this.user.user.uid,
        Etat: 'P',
      })
      .subscribe(
        (response) => {
          console.log(response);
          // Handle the response as needed
          this.router.navigate(['MESDEMANDES']);
        },
        (error) => {
          console.error(error);
          // Handle the error as needed
        }
      );
    // Process the form data here, e.g., submit to an API
    console.log(this.demandeForm.value);
  }
}
