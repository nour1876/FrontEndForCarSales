import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InspectionService } from 'src/service/inspection.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-inspection',
  templateUrl: './update-inspection.component.html',
  styleUrls: ['./update-inspection.component.css']
})
export class UpdateInspectionComponent implements OnInit {

  form:FormGroup ;
 id:String=this.activatedRoute.snapshot.params['id'] ;

 inspection: any ;

  constructor(private http: HttpClient, private uss:InspectionService, public ar: ActivatedRoute ,private activatedRoute:ActivatedRoute ,  private router : Router , private fb :FormBuilder) {   let id: number; }


  ngOnInit(): void {

    this.form = this.fb.group({
      id:[''] ,
      ville:['' ] ,
      date:[''] ,
      description:[''] ,
      annonce_id:[''] ,
      client_id:[''] ,
    })
  this.getbyid() ;
  }
  getbyid(){
    this.uss.getoneInspection(this.id).subscribe((data)=>{
this.inspection = data ;

this.patchForm(this.inspection) ;
    })
  }
patchForm(inspection:any){

this.form.patchValue({
  id : inspection.id ,
  ville: inspection.ville ,
  date: inspection.date ,
  description: inspection.description,
  annonce_id:inspection.annonce.id,
  client_id:inspection.client.id,

})

}
updateInspection(){

  this.uss.updateinspection(this.form.value,this.id,this.inspection.annonce.id,this.inspection.client.id).subscribe((data)=>{
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
    this.router.navigateByUrl('/myinspection')
  })
}
}
