import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent {
  current: any;
  avis: any = {};
  /*  constructor(private userService: UserService) {
    this.current=JSON.parse(localStorage.getItem('cuser')!);
    console.log("user",this.current);

  }
// add avis in db
  addAvis(){
    this.avis.publieur=this.current.nom+" "+this.current.prenom;
    this.avis.date_ajout=new Date();
    console.log("avis",this.avis);
    this.userService.create_Avis(this.avis);
  }
// read Avis from db
  ngOnInit(): void {
    this.userService.read_Avis().subscribe((data:any) => {
      this.avis = data;

      console.log("avis",this.avis);
    });
  } */
}
