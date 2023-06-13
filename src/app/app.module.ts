import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegistreComponent } from './registre/registre.component';
import { LayoutComponent } from './layout/layout.component';
import { AboutComponent } from './about/about.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { ProfilComponent } from './profil/profil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { CarComponent } from './car/car.component';
import { ContactComponent } from './contact/contact.component';
import { SidebaradminComponent } from './sidebaradmin/sidebaradmin.component';
import { DashbordComponent } from './admin/listinspection/dashbord.component';
import { BlogComponent } from './blog/blog.component';
import { UpdateprofilComponent } from './updateprofil/updateprofil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InspectionComponent } from './inspection/inspection.component';
import { ListannonceComponent } from './admin/listannonce/listannonce.component';
import { ListInspectionComponent } from './list-inspection/list-inspection.component';
import { RegisteradminComponent } from './registeradmin/registeradmin.component';
import { MyAnnonceComponent } from './my-annonce/my-annonce.component';
import { MyInspectionComponent } from './my-inspection/my-inspection.component';
import { UpdateInspectionComponent } from './update-inspection/update-inspection.component';
import { UpdateAnnonceComponent } from './update-annonce/update-annonce.component';
import { RecievedInspectionComponent } from './recieved-inspection/recieved-inspection.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegistreComponent,
    LayoutComponent,
    AboutComponent,
    AnnonceComponent,
    ProfilComponent,
    CarComponent,
    ContactComponent,
    SidebaradminComponent,
    DashbordComponent,
    BlogComponent,
    UpdateprofilComponent,
    ConnexionComponent,
    InspectionComponent,
    ListannonceComponent,
    ListInspectionComponent,
    RegisteradminComponent,
    MyAnnonceComponent,
    MyInspectionComponent,
    UpdateInspectionComponent,
    UpdateAnnonceComponent,
    RecievedInspectionComponent,
    FavoriteComponent
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
