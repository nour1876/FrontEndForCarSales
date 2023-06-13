import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { FormGroup } from '@angular/forms';

import { UserService } from 'src/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebaradmin',
  templateUrl: './sidebaradmin.component.html',
  styleUrls: ['./sidebaradmin.component.css']
})
export class SidebaradminComponent implements OnInit {

  id = this.activeroute.snapshot.params["id"]
  listuser: any
  user: any
  userform!: FormGroup
  constructor(private users: UserService, private activeroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //  console.log("id",this.id)
    this.getalluser()
  }
  getalluser() {
    this.users.getalluser().subscribe((res: any) => {
      this.listuser = res
      console.log("okkkk")
    })
  }
  Ondelete(id: any) {
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
        this.users.Ondelete(id).subscribe((res: any) => {
          // this.route.navigateByUrl("/user")
          Swal.fire(
            'Deleted!',
            'Your user  has been deleted.',
            'success'
          )
          this.router.navigate(['/user']);
          this.getalluser()
        })
      }
    }
    )
  }
  logout() {
    localStorage.clear()
    this.router.navigateByUrl("/login")
  }
}
