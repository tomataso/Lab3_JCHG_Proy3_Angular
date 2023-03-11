import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseUrl = 'http://localhost:3000/componentes';
@Injectable({
  providedIn: 'root'
})
export class ComponentesService {

  constructor(private http: HttpClient) { }

  create(data: { nombre: string; descripcion: string; fabricacion: string; parte: number; comentarios: string;}): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }



  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<any> {
    console.log(name);
    return this.http.get(`${baseUrl}?nombre=${name}`);
  }
  getAll(): Observable<any>
  {
    return this.http.get(baseUrl)
  }


}
