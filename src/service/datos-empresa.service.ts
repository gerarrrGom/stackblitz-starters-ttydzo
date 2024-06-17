import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DatosEmpresa } from '../app/models/DatosEmpresa';

@Injectable({
  providedIn: 'root'
})
export class DatosEmpresaService {
  private baseUrl='http://localhost:8080';  
  
  constructor(private http: HttpClient) {}

  getDatosEmpresa():Observable<DatosEmpresa[]>{
    return this.http.get<DatosEmpresa[]>(this.baseUrl+"/findall");
  }

  createDatosEmpresa(estancias: DatosEmpresa): Observable<DatosEmpresa>{
    return this.http.post<DatosEmpresa>(this.baseUrl+"/addDatosEmpresa",estancias);
  }

 deleteDatosEmpresa(idEmpresa: String): Observable<DatosEmpresa>{
    return this.http.delete<DatosEmpresa>(this.baseUrl+"/deleteDatosEmpresa/"+idEmpresa)
  }
}
