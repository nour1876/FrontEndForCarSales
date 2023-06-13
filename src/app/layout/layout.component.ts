import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/service/car.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  listcar :any
  car: any
  carform:FormGroup
  id=this.activeroute.snapshot.params["id"]
  p: number=1
  medecinlist :any
  constructor(private activeroute:ActivatedRoute,private formbuilder:FormBuilder, private cars:CarService) { }

  ngOnInit(): void {
    this.getallCar()
  }

  getallCar(){
    this.cars.getAllCar().subscribe((res:any)=>{
      this.listcar=res
      console.log("liste of cars",this.listcar)
    })

  }

  getonecar(){
    this.cars.getonecar(this.id).subscribe((res:any)=>{
      this.car=res
      console.log("details product",this.car)
    this.carform.patchValue({
     matricle:this.car.matricule,
     vitesse:this.car.vitesse,
     km:this.car.km,
     energie:this.car.energie,
     annee:this.car.annee,
     prix:this.car.prix,
    })})
   }



  deletecar(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cars.Ondelete(id).subscribe((res:any)=>{
          console.log("reponse",res)
          Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.getallCar()
      }) }
    })
  }

}

