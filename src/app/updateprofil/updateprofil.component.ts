import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/service/user.service';
import { user } from 'src/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateprofil',
  templateUrl: './updateprofil.component.html',
  styleUrls: ['./updateprofil.component.css']
})
export class UpdateprofilComponent implements OnInit {



  form:FormGroup ;
 id:String=this.activatedRoute.snapshot.params['id'] ;

  user: any ;

  constructor(private http: HttpClient, private uss:UserService, public ar: ActivatedRoute ,private activatedRoute:ActivatedRoute ,  private router : Router , private fb :FormBuilder) {   let id: number; }


  ngOnInit(): void {

    this.form = this.fb.group({
      id:[''] ,
       email:['' ] ,
      username:[''] ,
      adress:[''] ,
      phone:[''] ,
      password:[''] ,
    })
  this.getbyid() ;
  }
  getbyid(){
    this.uss.getuser(this.id).subscribe((data)=>{
this.user = data ;

this.patchForm(this.user) ;
    })
  }
patchForm(user:any){

this.form.patchValue({
  id : user.id ,
  email: user.email ,
  password: user.password ,
  username: user.username ,
  adress: user.adress ,
  phone:user.phone,
  confirm: user.confirm
})

}
updatestage(){

  this.uss.updateuser(this.id , this.form.value).subscribe((data)=>{
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

    // this.router.navigateByUrl('/myannonce')
    this.router.navigateByUrl('/profil')
  })
}
}

