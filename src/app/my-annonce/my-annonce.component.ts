import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from 'src/service/annonce.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-annonce',
  templateUrl: './my-annonce.component.html',
  styleUrls: ['./my-annonce.component.css']
})
export class MyAnnonceComponent implements OnInit {

  id:any;
  user:any =[];
  listcategorie:any;
    username=JSON.parse(localStorage.getItem("username")!)
    email=JSON.parse(localStorage.getItem("email")!)
    modalOpen: boolean = false;
    formularModalOpen: boolean = false;
    selectedFiles: FileList;
    description: string;
    date: Date;
    prix: string;
    lieu: string;
    categorie: string;
    message: string;
    listannonce:any=[];
    filteredlistannonce:any=[];
    selectedService :any;
    selectedRegion :any;
    keyword :any;
    favorite:any;

constructor(private annonce : AnnonceService ,private activeroute:ActivatedRoute,private router:Router,private http:HttpClient ){}

  ngOnInit(): void {
    this.id = localStorage.getItem('id');
    this.annonce.getAllCategorie().subscribe((res:any)=>{
      this.listcategorie=res
      
     });
   
     this.getallannonce();
     this.getfavorites();
  }

  getallannonce() {
   this.annonce.getAllAnnonce().subscribe((res:any)=>{
    this.listannonce=res
    this.filteredlistannonce=this.listannonce;
    console.log("okkkk")
   })
  
   
  }
getfavorites(){
  this.annonce.getAllFavorite(this.id).subscribe(d=>{
    this.favorite=d;
    console.log(this.favorite);
  })
}
  getImageURL(filename: string) {
    const sanitizedFilename = filename.replace('[', '').replace(']', '');
    const url = `http://localhost:8084/annonce/files/${sanitizedFilename}`;
    return url;
  }
   deleteannonce(id:any){
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
    this.annonce.Ondelete(id).subscribe((res:any)=>{
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
    )}
    isModalOpen: boolean = false;

    openModal() {
      this.isModalOpen = true;
    }
  
    closeModal() {
      this.isModalOpen = false;
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
        () => {
          this.message = 'Failed to upload';
        }
      );
    }
    search(keyword: string): void {
      if (keyword) {
        this.filteredlistannonce = this.listannonce.filter((car:any) =>
          car.description.toLowerCase().includes(keyword.toLowerCase()) ||
          car.lieu.toLowerCase().includes(keyword.toLowerCase())||
          car.prix.toLowerCase().includes(keyword.toLowerCase())||
          car.categorie.marque.toLowerCase().includes(keyword.toLowerCase())
        );
      } else {
        this.filteredlistannonce = [...this.listannonce];
      }
    }
      
    }
  
