import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from 'src/service/annonce.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-annonce',
  templateUrl: './update-annonce.component.html',
  styleUrls: ['./update-annonce.component.css']
})
export class UpdateAnnonceComponent implements OnInit {


  form: FormGroup;
  id: String = this.activatedRoute.snapshot.params['id'];

  annonnce: any;

  constructor(private http: HttpClient, private uss: AnnonceService, public ar: ActivatedRoute, private activatedRoute: ActivatedRoute, private router: Router, private fb: FormBuilder) { let id: number; }


  ngOnInit(): void {

    this.form = this.fb.group({
      id: [''],
      lieu: [''],
      prix: [''],
      description: [''],
      voiture_id: [''],
      categorie_id: [''],
      client_id: [''],
      statut: [''],
      date: [''],
      image: [''],
      images: [''],
    })
    this.getbyid();
  }
  getbyid() {
    this.uss.getoneAnnonce(this.id).subscribe((data) => {
      this.annonnce = data;

      this.patchForm(this.annonnce);
    })
  }
  patchForm(annonnce: any) {

    this.form.patchValue({
      id: annonnce.id,
      lieu: annonnce.ville,
      prix: annonnce.date,
      description: annonnce.description,
      voiture_id: annonnce.voiture.id,
      categorie_id: annonnce.categorie.id,
      client_id: annonnce.client.id,
      statut: annonnce.statut,
      image: annonnce.image,
      images: annonnce.images,
      date: annonnce.date
    })

  }
  updateAnnonce() {

    this.uss.updateAnnonce(this.form.value, this.id, this.annonnce.categorie.id, this.annonnce.voiture.id, this.annonnce.client.id).subscribe((data:any) => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Updated successfully'
      })

      this.router.navigateByUrl('/myannonce')

      //window.location.reload();


    },
   

    )
  }


}
