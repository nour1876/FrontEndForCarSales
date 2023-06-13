import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from 'src/service/annonce.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  listannonce :any
  id:any;
  constructor(private annonce : AnnonceService ,private activeroute:ActivatedRoute,private router:Router ){}

  ngOnInit(): void {
    //  console.log("id",this.id)
     this.getallannonce()
     this.id = localStorage.getItem('id')
  }
  getallannonce() {
   this.annonce.getAllAnnonce().subscribe((res:any)=>{
    this.listannonce=res
    console.log("okkkk")
   })
  }

  getImageURL(filename: string) {
    const sanitizedFilename = filename.replace('[', '').replace(']', '');
    const url = `http://localhost:8084/annonce/files/${sanitizedFilename}`;
    return url;
  }

}
