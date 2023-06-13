import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  constructor(private http:HttpClient) { }
  getAllAnnonce(){
    return this.http.get(`${environment.baseurl}/annonce`)
  }
  getAllFavorite(clientId:any){
    return this.http.get("http://localhost:8084/annonce/favorite/"+clientId);
  }
  addAnnonceToFavorite(annonceId:any,clientId:any){
    return this.http.post("http://localhost:8084/annonce/favorite/"+annonceId+"/"+clientId,{});
  }
  getAllCategorie(){
    return this.http.get(`${environment.baseurl}/categorie`)
  }

  getoneAnnonce(id:any){
    return this.http.get(`${environment.baseurl}/annonce/${id}`)
  }
  Ondelete(id:any)
  {
    return this.http.delete(`${environment.baseurl}/annonce/${id}`)

  }
  updateAnnonce(annonce:any , id:any,id_category:any,id_voiture:any, id_client:any){
    return this.http.put(`${environment.baseurl}/annonce/${id}/${id_category}/${id_voiture}/${id_client}`,annonce)
  }
  addAnnonce(annonce:any,idp:any ,ids:any ){
    return this.http.post(`${environment.baseurl}/annonce/upload/${ids}/${idp}`,annonce)
  }

  uploadFiles(annonce:any, idv:any, idc:any) {

    const header = {
      headers: new HttpHeaders()
        .set('Authorization', "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyYWhtYTIiLCJpYXQiOjE2ODQ4NjMzNzMsImV4cCI6MTY4NDk0OTc3M30.v6Tc1Ku7lFwGwwoYAeS89xd7iUe9tinatuzB7W1cxdm8bYfavB4OtP3Kcmfr6ZqupGCXoMnOOQsQGypuk3GpZA")
    }
    return this.http.post<any>(
      `${environment.baseurl}/annonce/upload/`+ idv + '/' + idc ,
      annonce,header

    );
  }
}


