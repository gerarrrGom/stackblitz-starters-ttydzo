import { Injectable } from '@angular/core';
import { Empresa } from './models/Empresa';
import { Proyecto } from './models/Proyecto';
import { Ubicacion } from './models/Ubicacion';

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
  eliminarDelLocal(key:string){
    localStorage.removeItem(key);
  }
  listEmpresas(): Empresa[] {
    const empresas: Empresa[] = [];
    empresas.push(new Empresa(
        1, "Azurian", "desarrollo", "Azurian es una empresa que se encarga de...",
        true, [new Proyecto("1", "CRUD", "Entender de POO", 0, true, new Ubicacion("Oficinas en Ciudad de México", "Ciudad de México"), 1),
               new Proyecto("1", "Base de datos", "Entender de POO y de base de datos", 7000, true, new Ubicacion("Oficinas en Ciudad de México", "Ciudad de México"), 1)]
    ));
    empresas.push(new Empresa(
        2, "Webpoint", "desarrollo", "Webpoint es una empresa que se encarga de...",
        false, [new Proyecto("2", "Angular", "Entender de POO y conocer el framework de Angular", 6000, true, new Ubicacion("Home Office", "Monterrey Nuevo León"), 1)]
    ));
    empresas.push(new Empresa(
        3, "BluePixel", "desarrollo", "BluePixel es una empresa que se encarga de...",
        true, [new Proyecto("3", "SpringBoot", "Crear CRUD con SpringBoot", 7000, true, new Ubicacion("Home Office", "Escobedo Nuevo León"), 1)]
    ));
    empresas.push(new Empresa(
        4, "Kokonut Studio", "desarrollo", "Kokonut Studio es una empresa que se encarga de...",
        false, [new Proyecto("4", "Scrumb", "Crear CRUD haciendo uso de la metodología Scrumb", 1, true, new Ubicacion("loma", "oaxaca"), 1)]
    ));
    empresas.push(new Empresa(
        5, "Octopus", "desarrollo", "Octopus es una empresa que se encarga de...",
        true, [new Proyecto("5", "RUP", "Realizar un sistema que permita registrar préstamos de libros en la biblioteca escolar haciendo uso de la metodología RUP", 7500, true, new Ubicacion("Home Office", "Tuxtepec Oaxaca"), 1)]
    ));
    return empresas;
}

}
