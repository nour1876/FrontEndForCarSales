import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from 'src/service/annonce.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listannonce',
  templateUrl: './listannonce.component.html',
  styleUrls: ['./listannonce.component.css']
})
export class ListannonceComponent implements OnInit {

  id = this.activeroute.snapshot.params["id"]
  listannonce: any


  constructor(private annonce: AnnonceService, private activeroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //  console.log("id",this.id)
    this.getallannonce()
  }
  getallannonce() {
    this.annonce.getAllAnnonce().subscribe((res: any) => {
      this.listannonce = res
      console.log("okkkk")
    })
  }

  getImageURL(filename: string) {
    const sanitizedFilename = filename.replace('[', '').replace(']', '');
    const url = `http://localhost:8084/annonce/files/${sanitizedFilename}`;
    return url;
  }
  deleteannonce(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085D6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.annonce.Ondelete(id).subscribe((res: any) => {
          this.router.navigateByUrl("/admin")
          Swal.fire(
            'Deleted!',
            'Your user  has been deleted.',
            'success'
          )
          this.router.navigate(['/user']);
          this.getallannonce()
        })
      }
    }
    )
  }
  logout() {
    localStorage.clear()
    this.router.navigateByUrl("/login")
  }

  ActiveAnnonce(id : any){
    this.annonce.getoneAnnonce(id).subscribe((res: any) => {
    this.annonce.updateAnnonce({
    'id' : res.id ,
    'lieu': res.lieu ,
    'prix': res.prix ,
    'description': res.description,
    'voiture_id': res.voiture.id,
    'categorie_id': res.categorie.id,
    'client_id': res.client.id,
    'statut': 1,
    'image': res.image,
    'images': res.images,
    'date': res.date
    },id,res.categorie.id,res.voiture.id,res.client.id).subscribe((res: any) => {
      // this.listprop = res
      console.log(res);

      Swal.fire(
        'Good job!',
        'Update successful!',
        'success'
      );
      window.location.reload();

      // this.router.navigateByUrl("/listannonce")
      console.log("liste of product", res)
    })
  })
  }
  disabledAnnonce(id : any){
    this.annonce.getoneAnnonce(id).subscribe((res: any) => {
      this.annonce.updateAnnonce({
      'id' : res.id ,
      'lieu': res.lieu ,
      'prix': res.prix ,
      'description': res.description,
      'voiture_id': res.voiture.id,
      'categorie_id': res.categorie.id,
      'client_id': res.client.id,
      'statut': 0,
      'image': res.image,
      'images': res.images,
      'date': res.date
      },id,res.categorie.id,res.voiture.id,res.client.id).subscribe((res: any) => {
        // this.listprop = res
        console.log(res);

        Swal.fire(
          'Good job!',
          'Update successful!',
          'success'
        );
        window.location.reload();
        // this.router.navigateByUrl("/listannonce")
        console.log("liste of product", res)
      })
    })
  }
}


