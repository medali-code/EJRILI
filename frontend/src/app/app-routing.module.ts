import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
/* import { CONTACTComponent } from './pages/contact/contact.component';
import { MAGASINComponent } from './pages/magasin/magasin.component'; */
/*
 */ import { RegisterComponent } from './pages/register/register.component';
/*
import { MesremorquagesComponent } from './pages/mesremorquages/mesremorquages.component';
 */
import { ProfilComponent } from './pages/profil/profil.component';
import { CONTACTComponent } from './pages/contact/contact.component';
import { MesremorquagesComponent } from './pages/mesremorquages/mesremorquages.component';
import { MesdemandesComponent } from './pages/mesdemandes/mesdemandes.component';
import { CreateDemandeComponent } from './create-demande/create-demande.component';
import { REMORQUAGEComponent } from './pages/remorquage/remorquage.component';
import { GARAGEComponent } from './pages/garage/garage.component';
import { CreateInterventionComponent } from './create-intervention/create-intervention.component';
import { AdminComponent } from './admin/admin.component';
import { AdminREMORQUAGEComponent } from './admin-remorquage/admin-remorquage.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminGARAGEComponent } from './admin-garage/admin-garage.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AuthinGuard } from './auth.inguard';
import { AuthGuard } from './auth.guard';
import { MescammionsComponent } from './mescammions/mescammions.component';
import { CreateCamionComponent } from './create-camion/create-camion.component';
import { CammionadminComponent } from './cammionadmin/cammionadmin.component';
import { CreateGaragisteComponent } from './create-garagiste/create-garagiste.component';
import { CreateChefferComponent } from './create-cheffer/create-cheffer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/accueil',
    pathMatch: 'full',
  },
  {
    path: 'CONNEXION',
    canActivate: [AuthinGuard],
    component: ConnexionComponent,
  },
  {
    path: 'REGISTER',
    component: RegisterComponent,
    canActivate: [AuthinGuard],
  },
  { path: 'accueil', component: AccueilComponent },
  {
    path: 'REMORQUAGE',
    canActivate: [AuthGuard],
    component: REMORQUAGEComponent,
  },
  {
    path: 'MESCAMMIONS',
    canActivate: [AuthGuard],
    component: MescammionsComponent,
  },
  {
    path: 'CREATECAMMION',
    canActivate: [AuthGuard],
    component: CreateCamionComponent,
  },
  /*   { path: 'NOSSERVICES', component: NOSSERVICESComponent },
   */ { path: 'GARAGE', canActivate: [AuthGuard], component: GARAGEComponent },
  {
    path: 'CreateIntervention',
    canActivate: [AuthGuard],

    component: CreateInterventionComponent,
  },


  /* { path: 'MAGASIN', component: MAGASINComponent },
 
 */
  { path: 'PROFIL', component: ProfilComponent },

  {
    path: 'MESREMORQUAGES',
    canActivate: [AuthGuard],
    component: MesremorquagesComponent,
  },
  { path: 'CONTACT', component: CONTACTComponent },
  {
    path: 'MESDEMANDES',
    canActivate: [AuthGuard],
    component: MesdemandesComponent,
  },
  {
    path: 'CREATEDEMANDES',
    canActivate: [AuthGuard],
    component: CreateDemandeComponent,
  },
  {
    path: 'CREATEGragiste',
    canActivate: [AuthGuard],
    component: CreateGaragisteComponent,
  },
  {
    path: 'CREATEchff',
    canActivate: [AuthGuard],
    component: CreateChefferComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '', // Empty path denotes the default child route
        redirectTo: 'REMORQUAGE',
        pathMatch: 'full',
      },
      {
        path: 'cammion',

        component: CammionadminComponent,
      },
      { path: 'REMORQUAGE', component: AdminREMORQUAGEComponent },
      { path: 'Users', component: AdminUsersComponent },
      { path: 'GARAGE', component: AdminGARAGEComponent },
      { path: 'Avis', component: AdminContactComponent },
      /*       { path: 'create-user', component: CreateUserComponent },
      { path: 'avis', component: AvisAdminComponent }, */
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
