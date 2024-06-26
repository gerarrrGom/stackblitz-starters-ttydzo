import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from './models/Empresa';
import { Proyecto } from './models/Proyecto';
import { DatosEmpresa } from './models/DatosEmpresa';
import { Alumno } from './models/Alumno';
import { Estancias } from './models/Estancias';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private baseUrl="http://localhost:8080";
  constructor(private httpClient:HttpClient) { }

  getEmpresas():Observable<Empresa[]>{
    return this.httpClient.get<Empresa[]>(this.baseUrl+"/Empresa/findall");
  }
  createEmpresa(tesista:Empresa):Observable<Empresa>{
    return this.httpClient.post<Empresa>(this.baseUrl+"/Empresa/add",tesista);
  }
  deleteEmpresa(matricula:string):Observable<Empresa>{
   return this.httpClient.delete<Empresa>(this.baseUrl+"/Empresa/delete"+matricula);
  }
  getProyectos():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.baseUrl+"/Proyecto/findall");
  }
  createProyecto(tesista:Proyecto):Observable<Proyecto>{
    return this.httpClient.post<Proyecto>(this.baseUrl+"/Proyecto/add",tesista);
  }
  deleteProyecto(matricula:string):Observable<Proyecto>{
   return this.httpClient.delete<Proyecto>(this.baseUrl+"/Proyecto/delete"+matricula);
  }

  getDatosEmpresa():Observable<DatosEmpresa[]>{
    return this.httpClient.get<DatosEmpresa[]>(this.baseUrl+"/DatosEmpresa/findall");
  }

  createDatosEmpresa(estancias: DatosEmpresa): Observable<DatosEmpresa>{
    return this.httpClient.post<DatosEmpresa>(this.baseUrl+"/DatosEmpresa/addDatosEmpresa",estancias);
  }

 deleteDatosEmpresa(idEmpresa: String): Observable<DatosEmpresa>{
    return this.httpClient.delete<DatosEmpresa>(this.baseUrl+"/DatosEmpresa/deleteDatosEmpresa/"+idEmpresa)
  }
getAlumno(matricula:string):Observable<Alumno>{
  return this.httpClient.get<Alumno>(this.baseUrl+"/findById/"+matricula);;
}
getAlumnos():Observable<Alumno[]>{
  return this.httpClient.get<Alumno[]>(this.baseUrl+"/findall");;
}

createAlumno(estancias: Alumno): Observable<Alumno>{
  return this.httpClient.post<Alumno>(this.baseUrl+"/addAlumno",estancias);
}

deleteAlumno(matricula: String): Observable<Alumno>{
  return this.httpClient.delete<Alumno>(this.baseUrl+"/deleteAlumno/"+matricula)
  }

getEstancias():Observable<Estancias[]>{
  return this.httpClient.get<Estancias[]>(this.baseUrl+"/findall");
}
createEstancias(estancias: Estancias): Observable<Estancias>{
  return this.httpClient.post<Estancias>(this.baseUrl+"/addEstanciasRequest",estancias);
}
deleteEstancias(fechaInicio: String): Observable<Estancias>{
  return this.httpClient.delete<Estancias>(this.baseUrl+"/deleteEstancias/"+fechaInicio)
  }

// Nuevo método para obtener toda la información
getAllInformation(): Observable<{ empresas: Empresa[], proyectos: Proyecto[], datosEmpresa: DatosEmpresa[], alumnos: Alumno[], estancias: Estancias[] }> {
  return this.httpClient.get<{ empresas: Empresa[], proyectos: Proyecto[], datosEmpresa: DatosEmpresa[], alumnos: Alumno[], estancias: Estancias[] }>(this.baseUrl + "/getAllInformation");
}
}
