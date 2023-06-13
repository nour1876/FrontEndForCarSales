import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  local: any;
  utilisateur: any;
  role: any;
  constructor(private router:Router) { }
  username=JSON.parse(localStorage.getItem("username")!)
  email=JSON.parse(localStorage.getItem("email")!)
  id=JSON.parse(localStorage.getItem("id")!)
  ngOnInit(): void {
    this.local = localStorage.getItem("role");
    if (this.local) {
      this.utilisateur = JSON.parse(this.local);
      console.log("utilisateur = ", this.utilisateur);
      if (Array.isArray(this.utilisateur) && this.utilisateur.length > 0) {
        this.role = this.utilisateur[0];
      }
      console.log("test role = ", this.role);
    }
    if(this.role==null){
      this.role = this.utilisateur?.role || '';
    }
    console.log("test role = ", this.role);
  }
  home(){
    this.router.navigateByUrl("#");
  }
  logout(){
    localStorage.clear()
     this.router.navigateByUrl("/login")
  }

}
