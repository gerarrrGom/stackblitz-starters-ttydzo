import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empresa } from '../app/models/Empresa';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private baseUrl='http://localhost:8080';  
  
  constructor(private http: HttpClient) {}

  getEmpresa():Observable<Empresa[]>{
    return this.http.get<Empresa[]>(this.baseUrl+"/findall");
  }

  createEmpresa(estancias: Empresa): Observable<Empresa>{
    return this.http.post<Empresa>(this.baseUrl+"/addEmpresa",estancias);
  }

 deleteEmpresa(idEmpresa: String): Observable<Empresa>{
    return this.http.delete<Empresa>(this.baseUrl+"/deleteEmpresa/"+idEmpresa)
  }
}
