import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  guardarEnLocal(key:string,value:string){
    localStorage.setItem(key,value);
}
  cargarDeLocal(key:string){
    return localStorage.getItem(key);
    //carga del local
}
}
