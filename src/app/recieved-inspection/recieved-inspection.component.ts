import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InspectionService } from 'src/service/inspection.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recieved-inspection',
  templateUrl: './recieved-inspection.component.html',
  styleUrls: ['./recieved-inspection.component.css']
})
export class RecievedInspectionComponent implements OnInit {

  listinspection: any
  id: any;

  constructor(private inspection: InspectionService, private activeroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //  console.log("id",this.id)
    this.id = localStorage.getItem("id");
    this.getallinspection()
  }
  getallinspection() {
    this.inspection.getAllinspection().subscribe((res: any) => {
      this.listinspection = res
      console.log("okkkk")
    })
  }
  deleteinspection(id: any) {
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
        this.inspection.Ondelete(id).subscribe((res: any) => {
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
    )
  }

  Activeinspection(id : any){
    this.inspection.getoneInspection(id).subscribe((res: any) => {
    this.inspection.updateinspection({
    'id' : res.id ,
    'ville': res.ville,
    'description': res.description,
    'annonce_id': res.annonce.id,
    'client_id': res.client.id,
    'statut': 1,
    'date': res.date
    },id,res.annonce.id,res.client.id).subscribe((res: any) => {
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
  disabledinspection(id : any){
    this.inspection.getoneInspection(id).subscribe((res: any) => {
      this.inspection.updateinspection({
        'id' : res.id ,
        'ville': res.ville,
        'description': res.description,
        'annonce_id': res.annonce.id,
        'client_id': res.client.id,
        'statut': 0,
        'date': res.date
      },id,res.annonce.id,res.client.id).subscribe((res: any) => {
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
