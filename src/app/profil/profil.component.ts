import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AnnonceService } from 'src/service/annonce.service';
import { InspectionService } from 'src/service/inspection.service';
import { UserService } from 'src/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
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
  listannonce:any[]=[];
listinspection:any[]=[];
modalInspec:boolean=false;
  constructor(private inspection:InspectionService ,private route:Router,private userService:UserService,private http: HttpClient,private annonce: AnnonceService, private activeroute: ActivatedRoute) { }


  ngOnInit(): void {
    this.id = localStorage.getItem("id");
   console.log("username",this.username)
   console.log("email",this.email)
   this.getonecollab();
   this.id = localStorage.getItem('id');
    this.annonce.getAllCategorie().subscribe((res:any)=>{
      this.listcategorie=res
      console.log("okkkk")
     });
    this.getallannonce();
    this.getallinspection();
    
  }
  getallinspection() {
    this.inspection.getAllinspection().subscribe((res:any)=>{
     this.listinspection=res
     console.log("okkkk")
    })
   }
  getallannonce() {
    this.annonce.getAllAnnonce().subscribe((res:any)=>{
     this.listannonce=res
     console.log(this.listannonce);
    })
   }
  getonecollab(){
    this.userService.getuser(this.id).subscribe((res:any)=>{
      this.user=res
      console.log(res);
      console.log("details product", this.user)
      // this.collabform.patchValue({

      //   email:this.collaborateur.email,
      //   password:"",
      //   username:this.collaborateur.username,
      //   type:this.collaborateur.type,

      // })
    })
  }
  openPopup(){
    console.log(this.listannonce);
    if(this.listannonce && this.listannonce.length == 0){
      this.openModal();
    }
    else{
      this.route.navigate(['/myannonce']);
    }
  }

 openInspecModal(){
  if(this.listinspection.length == 0){
  this.modalInspec=true;
}
else{
  this.route.navigate(['/receivedinspection']);
}
 }
closeInspecModal(){
this.modalInspec=false;
}
  openModal() {
    this.modalOpen = true;
  }

  closeModal() {
    this.modalOpen = false;
  }

  openFormularModal() {
    this.formularModalOpen = true;
  }

  closeFormularModal() {
    this.formularModalOpen = false;
  }
  logout(){
    localStorage.clear()
    this.route.navigateByUrl('/')
  }
  onFileSelected(event: any) {
    this.selectedFiles = event.target.files;
  }

  uploadFiles(Voiture_Id: number) {
    let client_id = this.id;
    const formData: FormData = new FormData();
    for (let i = 0; i < this.selectedFiles.length ; i++) {
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
        this.ngOnInit();
        this.message = response.body.message;
      },
      error => {
        this.message = 'Failed to upload';
      }
    );
  }

}
