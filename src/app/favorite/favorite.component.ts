import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnonceService } from 'src/service/annonce.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor(private annonceService:AnnonceService,private activeroute:ActivatedRoute) { }
  favoris:any
  id:any;
  isFavorite:boolean=false;

  
  ngOnInit(): void {
    this.id = localStorage.getItem("id");
    this.annonceService.getAllFavorite(this.id).subscribe(d=>{
      this.favoris=d}
    )

  }
  getImageURL(filename: string) {
    const sanitizedFilename = filename.replace('[', '').replace(']', '');
    const url = `http://localhost:8084/annonce/files/${sanitizedFilename}`;
    return url;
  }
  toggleFavorite() {
    this.isFavorite = !this.isFavorite;
  }

}
