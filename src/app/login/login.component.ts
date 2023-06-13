import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinform: FormGroup;
  role_admin : any;
  role_client : any;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.signinform = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signin() {
    this.authService.signin(this.signinform.value).subscribe(
      (res: any) => {
        console.log("response", res);
        console.log("response", res.roles[0]);



          localStorage.setItem('userconnect', JSON.stringify(res));
          localStorage.setItem('id', JSON.stringify(res.id));
          localStorage.setItem('email', JSON.stringify(res.email));
          localStorage.setItem('username', JSON.stringify(res.username));
          localStorage.setItem('role', JSON.stringify(res.roles));
          localStorage.setItem('token', res.accessToken);
          localStorage.setItem('refreshToken', res.refreshToken);
          localStorage.setItem("state", "0");
           if(res.roles[0] == "ROLE_ADMIN"){
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
              title: 'Connected successfully'
            })
            this.router.navigateByUrl('/listannonce');

           }else{
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
              title: 'Connected successfully'
            })
            this.router.navigateByUrl('/');
           }

      },
      err => {
        Swal.fire({
          icon: 'error',
          title: 'User not found',
          text: 'Invalid email',
          footer: 'Invalid password'
        });
        console.log(err);
      }
    );
  }
}
