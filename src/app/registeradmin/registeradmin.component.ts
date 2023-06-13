import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/service/auth.service';

@Component({
  selector: 'app-registeradmin',
  templateUrl: './registeradmin.component.html',
  styleUrls: ['./registeradmin.component.css']
})
export class RegisteradminComponent implements OnInit {

  registreform!:FormGroup
  constructor(private formbuilder:FormBuilder,private authservice:AuthService
    ,private route:Router
  ) { }

  ngOnInit(): void {
    this.registreform=this.formbuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
      email:['',Validators.required],
      role:['',Validators.required],
      confirm:['1',Validators.required],
    })
  }
  signup(){
    this.registreform.patchValue({role:["admin"]})
    this.authservice.signupadmin(this.registreform.value).subscribe((res:any)=>
    {
console.log("res",res)
this.route.navigateByUrl("/connexion")
    })

  }

}
