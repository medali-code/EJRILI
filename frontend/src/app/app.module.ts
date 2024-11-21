import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ActionReducer, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

registerLocaleData(fr);
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
/* import { CONTACTComponent } from './pages/contact/contact.component';
 */
/* import { ProfilComponent } from './pages/profil/profil.component';
 */ import { ConnexionComponent } from './pages/connexion/connexion.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavbComponent } from './navb/navb.component';
/* import { MAGASINComponent } from './pages/magasin/magasin.component';

import { IndexComponent } from './pages/index/index.component';
 */

import { reducer } from './reduiser/auth.reducer';
import { GARAGEComponent } from './pages/garage/garage.component';
import { REMORQUAGEComponent } from './pages/remorquage/remorquage.component';
import { MesremorquagesComponent } from './pages/mesremorquages/mesremorquages.component';
import { MesdemandesComponent } from './pages/mesdemandes/mesdemandes.component';
import { CreateDemandeComponent } from './create-demande/create-demande.component';
import { CreateInterventionComponent } from './create-intervention/create-intervention.component';
import { AdminComponent } from './admin/admin.component';
import { SidbarComponent } from './sidbar/sidbar.component';
import { AdminREMORQUAGEComponent } from './admin-remorquage/admin-remorquage.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminGARAGEComponent } from './admin-garage/admin-garage.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { MescammionsComponent } from './mescammions/mescammions.component';
import { CreateCamionComponent } from './create-camion/create-camion.component';
import { CammionadminComponent } from './cammionadmin/cammionadmin.component';
import { CreateGaragisteComponent } from './create-garagiste/create-garagiste.component';
import { CreateChefferComponent } from './create-cheffer/create-cheffer.component';

@NgModule({
  declarations: [
    NavbComponent,
    NavbarComponent,
    FooterComponent,
    AppComponent,
    AccueilComponent,
    /*     NOSSERVICESComponent,
     */ RegisterComponent,
    REMORQUAGEComponent,
    //CONTACTComponent,
    MesremorquagesComponent,
    /*     ProfilComponent,
     */ ConnexionComponent,
    MesdemandesComponent,
    CreateDemandeComponent,
    CreateInterventionComponent,
    GARAGEComponent,
    AdminComponent,
    SidbarComponent,
    AdminREMORQUAGEComponent,
    AdminUsersComponent,
    AdminGARAGEComponent,
    AdminContactComponent,
    MescammionsComponent,
    CreateCamionComponent,
    CammionadminComponent,
    CreateGaragisteComponent,
    CreateChefferComponent,
    /* MAGASINComponent,
    ,
    IndexComponent,
    ,
    MesdemandesComponent, */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    /*   AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDc5vlAITEAR2Duj4rpX7DDynfeiRFwhG0',
      libraries: ['places'],
    }), */
    StoreModule.forRoot(
      { user: reducer },
      {
        metaReducers: [localStorageSyncReducer],
      }
    ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({ keys: ['user'], rehydrate: true })(reducer);
}
