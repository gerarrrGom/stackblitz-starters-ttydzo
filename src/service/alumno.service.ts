import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Alumno } from '../app/models/Alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private baseUrl='http://localhost:8080';  
  
  constructor(private http: HttpClient) {}
 
  getAlumno():Observable<Alumno[]>{
    return this.http.get<Alumno[]>(this.baseUrl+"/findall");
  }

  createAlumno(estancias: Alumno): Observable<Alumno>{
    return this.http.post<Alumno>(this.baseUrl+"/addAlumno",estancias);
  }

 deleteAlumno(matricula: String): Observable<Alumno>{
    return this.http.delete<Alumno>(this.baseUrl+"/deleteAlumno/"+matricula)
  }
}
