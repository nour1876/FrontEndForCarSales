import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { InspectionService } from 'src/service/inspection.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inspection',
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.css']
})
export class InspectionComponent implements OnInit {
  productForm: FormGroup;
  description: string;
  date: string;
  ville: string;
  message: string;
  id :any;
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute, private InspectionService: InspectionService,private http: HttpClient) { }

  ngOnInit(): void {
this.id = localStorage.getItem('id');
console.log(this.id);
    this.productForm = this.formBuilder.group({
      description: [''],
      ville: [''],
      date: [''],
      statut: ['']
    });
  }

  uploadFiles() {
    const formData: FormData = new FormData();

    formData.append('description', this.description);
    formData.append('date', this.date);
    formData.append('ville', this.ville);
    formData.append('statut', "0");
let annonce_Id = this.route.snapshot.params["id"];
let client_Id = this.id;
    const url = `http://localhost:8084/inspection/upload/${annonce_Id}/${client_Id}`;
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');

    this.http.post(url, formData, { headers }).subscribe(
      (response :any) => {
        this.message = response.body.message;
      },
      error => {
        this.message = 'Failed to upload';
      }
    );
  }
  onSubmit(): void {
    if (this.productForm.invalid) {
      return;
    }



    this.InspectionService.addinspection(this.productForm.value)
      .subscribe(
        response => {
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


          //window.location.reload();


          console.log('Upload successful:', response);
          // Handle the successful upload response here
        },
        error => {
          console.error('Upload failed:', error);
          // Handle the upload error here
        }
      );
  }
}
