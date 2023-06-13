import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from 'src/service/annonce.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-annonce',
  templateUrl: './annonce.component.html',
  styleUrls: ['./annonce.component.css']
})
export class AnnonceComponent implements OnInit {
  selectedFiles: FileList;
  description: string;
  date: Date;
  prix: string;
  lieu: string;
  categorie: string;
  message: string;
  id :any;
  listcategorie:any = [];
  constructor(private http: HttpClient,private annonce: AnnonceService, private activeroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    this.annonce.getAllCategorie().subscribe((res:any)=>{
      this.listcategorie=res
      console.log("okkkk")
     })
    throw new Error('Method not implemented.');

  }

  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
  }

  uploadFiles(Voiture_Id: number) {
    let client_id = this.id;
    const formData: FormData = new FormData();
    for (let i = 0; i < this.selectedFiles.length; i++) {
      formData.append('files', this.selectedFiles[i]);
    }
    formData.append('description', this.description);
    // formData.append('date', this.date);
    formData.append('prix', this.prix);
    formData.append('lieu', this.lieu);
    formData.append('categorie', this.categorie);
    formData.append('statut', '0');

    const url = `http://localhost:8084/annonce/upload/${this.categorie}/${Voiture_Id}/${client_id}`;
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    this.http.post(url, formData, { headers }).subscribe(
      (response :any) => {
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
          title: 'Added successfully'
        })
        this.message = response.body.message;
      },
      error => {
        this.message = 'Failed to upload';
      }
    );
  }

}





