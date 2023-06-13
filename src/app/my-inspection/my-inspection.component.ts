import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InspectionService } from 'src/service/inspection.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-my-inspection',
  templateUrl: './my-inspection.component.html',
  styleUrls: ['./my-inspection.component.css']
})
export class MyInspectionComponent implements OnInit {

  listinspection :any
  id:any;

  constructor(private inspection:InspectionService ,private activeroute:ActivatedRoute,private router:Router ){}

    ngOnInit(): void {
      //  console.log("id",this.id)
      this.id = localStorage.getItem("id");
       this.getallinspection()
    }
    getallinspection() {
     this.inspection.getAllinspection().subscribe((res:any)=>{
      this.listinspection=res
      console.log("okkkk")
     })
    }
     deleteinspection(id:any){
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
      this.inspection.Ondelete(id).subscribe((res:any)=>{
     this.router.navigateByUrl("/admin")
         Swal.fire(
          'Deleted!',
          'Your user  has been deleted.',
          'success'
         )
        this.router.navigate(['/user']);
        this.getallinspection()
       })
        }
       }
      )}
}
