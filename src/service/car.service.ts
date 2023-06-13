import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private http:HttpClient) { }
  getAllCar(){
    return this.http.get(`${environment.baseurl}/voiture`)
  }

  getonecar(id:any){
    return this.http.get(`${environment.baseurl}/annonce/${id}`)
  }
  Ondelete(id:any)
  {
    return this.http.delete(`${environment.baseurl}/voiture/${id}`)

  }
  updateCar(voiture:any , id:any){
    return this.http.put(`${environment.baseurl}/voiture/${id}`,voiture)
  }
  addCar(voiture:any,idp:any ,ids:any ){
    return this.http.post(`${environment.baseurl}/voiture/upload/${ids}/${idp}`,voiture)
  }

}
