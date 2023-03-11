import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

const baseUrl = 'http://localhost:3000/productos';
@Injectable({
  providedIn: 'root'
})
export class ComponentesService {

  constructor(private http: HttpClient) { }

  create(data: { nombre: string; descripcion: string; fabricacion: string; parte: number; comentarios: string;}): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
