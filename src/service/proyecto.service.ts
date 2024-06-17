import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Proyecto } from '../app/models/Proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private baseUrl='http://localhost:8080';  
  
  constructor(private http: HttpClient) {}

  getProyecto():Observable<Proyecto[]>{
    return this.http.get<Proyecto[]>(this.baseUrl+"/findall");
  }

  createProyecto(estancias: Proyecto): Observable<Proyecto>{
    return this.http.post<Proyecto>(this.baseUrl+"/add",estancias);
  }

 deleteProyecto(idProyecto: String): Observable<Proyecto>{
    return this.http.delete<Proyecto>(this.baseUrl+"/delete/"+idProyecto)
  }
}