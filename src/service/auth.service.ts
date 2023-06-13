import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  signin(signinrequest:any){
    return this.http.post(`${environment.baseurl}/api/auth/signin`,signinrequest)
  }

  signupadmin(signuprequest:any){
    return this.http.post(`${environment.baseurl}/Admin/signup`,signuprequest)
  }
  signupclient(signuprequest:any){
    return this.http.post(`${environment.baseurl}/Clients/signup`,signuprequest)
  }

  getJwtToken(){
    return localStorage.getItem('token')!
  }

  refreshToken(){
      let refreshToken= localStorage.getItem("refreshToken")
    return this.http.post(`${environment.baseurl}/api/auth/refreshtoken`,refreshToken)

  }


  getclientbyid(id:any){
    return this.http.get(`${environment.baseurl}/client/getone/${id}`)
 }

  //createorder(order:any,ids:any,idclient:any){
  //  return this.http.post(`${environment.baseurl}/order/save1/${idclient}?ids=${ids}`,order)
 // }
}
