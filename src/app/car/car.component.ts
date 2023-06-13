import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AnnonceService } from 'src/service/annonce.service';
import { CarService } from 'src/service/car.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  listCar :any
  car: any
  id=this.activeroute.snapshot.params["id"]
  p: number=1
  isFavorite: boolean = false;
  constructor(private activeroute:ActivatedRoute,private formbuilder:FormBuilder, private carservice:CarService,private annonceService:AnnonceService) { }

  ngOnInit(): void {
    this.getoneCar();
  }

  getallCar(){
    this.carservice.getAllCar().subscribe((res:any)=>{
      this.listCar=res
      console.log("liste of cars",this.listCar)
    })

  }
  addCarToFavorite(){
    this.isFavorite = !this.isFavorite;
    if(this.isFavorite){
    this.annonceService.addAnnonceToFavorite(this.car.id,this.id).subscribe(()=>{
      console.log("added");
    })
  }
  else{
    console.log("erreur")
  }
  }
  getImageURL(filename: string) {
    const sanitizedFilename = filename.replace('[', '').replace(']', '');
    const url = `http://localhost:8084/annonce/files/${sanitizedFilename}`;
    return url;
  }
  getoneCar(){
    this.carservice.getonecar(this.id).subscribe((res:any)=>{
      this.car=res
      console.log("details product",this.car)
       })}



}
