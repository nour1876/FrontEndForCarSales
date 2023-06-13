import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class InspectionService {

  constructor(private http:HttpClient) { }
  getAllinspection(){
    return this.http.get(`${environment.baseurl}/inspection`)
  }

  // getonecar(id:any){
  //   return this.http.get(`${environment.baseurl}/voiture/${id}`)
  // }
  Ondelete(id:any)
  {
    return this.http.delete(`${environment.baseurl}/inspection/${id}`)

  }
  updateinspection(inspection:any , id:any,annonce_id:any,client_id:any){
    return this.http.put(`${environment.baseurl}/inspection/${id}/${annonce_id}/${client_id}`,inspection)
  }
  addinspection(inspection:any){
    return this.http.post(`${environment.baseurl}/inspection`,inspection)
  }
  getoneInspection(id:any){
    return this.http.get(`${environment.baseurl}/inspection/${id}`)
  }

}
