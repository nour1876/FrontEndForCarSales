import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {
  registreform!:FormGroup
  constructor(private formbuilder:FormBuilder,private authservice:AuthService
    ,private route:Router
  ) { }

  ngOnInit(): void {
    this.registreform = this.formbuilder.group({
      username:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      role:['',Validators.required],
      phone:['',Validators.required],
      adress:['',Validators.required],
      confirm:[true,Validators.required],


    })
  }
  signupcus(){
    this.registreform.patchValue({role:["customer"]})
    this.authservice.signupclient(this.registreform.value).subscribe((res:any)=>
    {
console.log("res",res)

this.route.navigateByUrl("/login")
    })

  }

}

