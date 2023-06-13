import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { user } from 'src/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }



  getalluser(){

    return this.http.get(`${environment.baseurl}/users`)
  }

 Ondelete(id:any)
  {
    return this.http.delete(`${environment.baseurl}/users/${id}`)

  }
  getuser(id:any){
    return this.http.get(`${environment.baseurl}/Clients/${id}`)}

    updateuser(id:any, user:user){
return this.http.put(`${environment.baseurl}/Clients/${id}`,user)
    }
}
