import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from './models/Empresa';
import { Proyecto } from './models/Proyecto';
import { Carrera } from './models/Carrera';
import { Apoyos } from './models/Apoyos';
import { Alumno } from './models/Alumno';
import { Opinion } from './models/Opinon';
import { DatosEmpresa } from './models/DatosEmpresa';
import { Alumno } from './models/Alumno';
import { Estancias } from './models/Estancias';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private baseUrl="http://localhost:8080";
  constructor(private httpClient:HttpClient) { }

  // Empresas
  getEmpresas():Observable<Empresa[]>{
    return this.httpClient.get<Empresa[]>(this.baseUrl+"/Empresa/findall");
  }
  createEmpresa(empresa:Empresa):Observable<Empresa>{
    return this.httpClient.post<Empresa>(this.baseUrl+"/Empresa/add",empresa);
  }
  deleteEmpresa(id:number):Observable<Empresa>{
   return this.httpClient.delete<Empresa>(this.baseUrl+"/Empresa/delete/" + id);
  }
  getEmpresaById(id:number):Observable<Empresa>{
    return this.httpClient.get<Empresa>(this.baseUrl+"/Empresa/findById/"+ id);
  }

  // Proyectos
  getProyectos():Observable<Proyecto[]>{
    return this.httpClient.get<Proyecto[]>(this.baseUrl+"/Proyecto/findall");
  }
  createProyecto(proyecto:Proyecto):Observable<Proyecto>{
    return this.httpClient.post<Proyecto>(this.baseUrl+"/Proyecto/add",proyecto);
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
  // Opiniones
  getOpiniones():Observable<Opinion[]>{
    return this.httpClient.get<Opinion[]>(this.baseUrl+"/Opinion/findall");
  }
  createOpinion(opinion:Opinion):Observable<Opinion>{
    return this.httpClient.post<Opinion>(this.baseUrl+"/Opinion/add",opinion);
  }
  deleteOpinion(id:number):Observable<Opinion>{
   return this.httpClient.delete<Opinion>(this.baseUrl+"/Opinion/delete/" + id);
  }

  // Carreras
  getCarreras():Observable<Carrera[]>{
    return this.httpClient.get<Carrera[]>(this.baseUrl+"/Carrera/findall");
  }
  createCarrera(carrera:Carrera):Observable<Carrera>{
    return this.httpClient.post<Carrera>(this.baseUrl+"/Carrera/add",carrera);
  }
  deleteCarrera(id:number):Observable<Carrera>{
   return this.httpClient.delete<Carrera>(this.baseUrl+"/Carrera/delete/" + id);
  }

  // Apoyos
  getApoyos():Observable<Apoyos[]>{
    return this.httpClient.get<Apoyos[]>(this.baseUrl+"/Apoyos/findall");
  }
  createApoyos(apoyos:Apoyos):Observable<Apoyos>{
    return this.httpClient.post<Apoyos>(this.baseUrl+"/Apoyos/add",apoyos);
  }
  deleteApoyos(id:number):Observable<Apoyos>{
   return this.httpClient.delete<Apoyos>(this.baseUrl+"/Apoyos/delete/" + id);
  }
  getApoyosById(id:number):Observable<Apoyos>{
    return this.httpClient.get<Apoyos>(this.baseUrl+"/Apoyos/findById/" + id);
  }

  // Alumnos
  getAlumnos():Observable<Alumno[]>{
    return this.httpClient.get<Alumno[]>(this.baseUrl+"/Alumno/findall");
  }
  createAlumno(alumno:Alumno):Observable<Alumno>{
    return this.httpClient.post<Alumno>(this.baseUrl+"/Alumno/add",alumno);
  }
  deleteAlumno(id:number):Observable<Alumno>{
   return this.httpClient.delete<Alumno>(this.baseUrl+"/Alumno/delete/" + id);
  }
}
