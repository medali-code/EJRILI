import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthState } from '../reduiser/auth.reducer';
import { Store, select } from '@ngrx/store';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-camion',
  templateUrl: './create-camion.component.html',
  styleUrls: ['./create-camion.component.css']
})

export class CreateCamionComponent {
  apiUrl = 'http://localhost:3000/api/cammion';
  user?: any;

  newCammion: FormGroup = this.formBuilder.group({
    marque: ['', Validators.required],
    type: ['', Validators.required],
    matricule: ["", Validators.required],
  });
  // Replace with your API URL

  constructor(
    private http: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private store: Store<AuthState>
  ) { }

  ngOnInit() {
    this.newCammion = this.formBuilder.group({
      marque: ['', Validators.required],
      type: ['', Validators.required],
      matricule: [null, Validators.required],
    });

    this.store.pipe(select((state) => state.user)).subscribe((user) => {
      console.log(user);
      this.user = user;
    });
  }

  createCamion() {
    console.log(this.newCammion);
    this.http
      .post<any>(this.apiUrl, {
        ...this.newCammion.value,
      })
      .subscribe(
        (createdCamion) => {
          console.log('Cammion created:', createdCamion);
          // Reset the form


          this.router.navigate(['/admin/cammion']);
        },
        (error) => {
          console.error('Error creating Cammion:', error);
        }
      );
  }
}
