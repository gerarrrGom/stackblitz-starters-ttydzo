import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstanciasService {
  /*private baseUrl='http://localhost:8080';  
  
  constructor(private http: HttpClient) {}

  getEstancias():Observable<Estancias[]>{
    return this.http.get<Estancias[]>(this.baseUrl+"/findall");
  }

  createEstancias(todo: Estancias): Observable<Estancias>{
    return this.http.post<Estancias>(this.baseUrl+"/addEmpresa",todo);
  }

 deleteEstancias(fechaInicio: String): Observable<Estancias>{
    return this.http.delete<Empresa>(this.baseUrl+"/deleteEmpresa/"+fechaInicio)
  }*/
}
