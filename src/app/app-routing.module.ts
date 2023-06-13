import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegistreComponent } from './registre/registre.component';
import { AboutComponent } from './about/about.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { ProfilComponent } from './profil/profil.component';
import { CarComponent } from './car/car.component';
import { ContactComponent } from './contact/contact.component';
import { DashbordComponent } from './admin/listinspection/dashbord.component';
import { SidebaradminComponent } from './sidebaradmin/sidebaradmin.component';

import { BlogComponent } from './blog/blog.component';
import { UpdateprofilComponent } from './updateprofil/updateprofil.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { InspectionComponent } from './inspection/inspection.component';
import { ListannonceComponent } from './admin/listannonce/listannonce.component';
import { MyAnnonceComponent } from './my-annonce/my-annonce.component';
import { MyInspectionComponent } from './my-inspection/my-inspection.component';
import { UpdateAnnonceComponent } from './update-annonce/update-annonce.component';
import { UpdateInspectionComponent } from './update-inspection/update-inspection.component';
import { RegisteradminComponent } from './registeradmin/registeradmin.component';
import { RecievedInspectionComponent } from './recieved-inspection/recieved-inspection.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'layout',component:LayoutComponent},
  {path:'footer',component:FooterComponent},
  {path:'about',component:AboutComponent},
  {path:'annonce',component:AnnonceComponent},
  {path:'profil',component:ProfilComponent},
  {path:'car/:id',component:CarComponent},
  {path:'updateAnnonce/:id',component:UpdateAnnonceComponent},
  {path:'updateInspection/:id',component:UpdateInspectionComponent},
  {path:'contact',component:ContactComponent},
  {path:'dashbord',component:DashbordComponent},
  {path:'sidebaradmin',component:SidebaradminComponent},
  {path:'listannonce',component:ListannonceComponent},
  {path:'myannonce',component:MyAnnonceComponent},
  {path:'myinspection',component:MyInspectionComponent},
  {path:'receivedinspection',component:RecievedInspectionComponent},
  {path:'listinspection',component:DashbordComponent},
  {path:'blog',component:BlogComponent},
  {path:'updateprofil/:id',component:UpdateprofilComponent},
  {path:'connexion',component:ConnexionComponent},
  {path:'registre',component:RegistreComponent},
  {path:'registreadmin',component:RegisteradminComponent},
  {path:'inspection/:id',component:InspectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
