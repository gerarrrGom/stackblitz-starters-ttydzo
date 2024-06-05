import { Injectable } from '@angular/core';
import { Empresa } from './models/Empresa';
import { Proyecto } from './models/Proyecto';
import { Ubicacion } from './models/Ubicacion';
import { DatosEmpresa } from './models/DatosEmpresa';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  guardarEnLocal(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  cargarDeLocal(key: string) {
    return localStorage.getItem(key);
    //carga del local
  }
  eliminarDelLocal(key: string) {
    localStorage.removeItem(key);
  }

  listEmpresas(): Empresa[] {
    const empresas: Empresa[] = [];

    empresas.push(new Empresa(
      1, "Azurian", "desarrollo", "Azurian es una empresa que se encarga de...",
      true
    ));

    empresas.push(new Empresa(
      2, "Webpoint", "desarrollo", "Webpoint es una empresa que se encarga de...",
      false
    ));

    empresas.push(new Empresa(
      3, "BluePixel", "desarrollo", "BluePixel es una empresa que se encarga de...",
      true
    ));

    empresas.push(new Empresa(
      4, "Kokonut Studio", "desarrollo", "Kokonut Studio es una empresa que se encarga de...",
      false
    ));

    empresas.push(new Empresa(
      5, "Octopus", "desarrollo", "Octopus es una empresa que se encarga de...",
      true
    ));

    return empresas;
  }

  getEmpresasConDatos() {
    let empresa: DatosEmpresa[] = [];
    empresa.push(new DatosEmpresa(
      1,
      'Azurian',
      'Tecnología',
      'Desarrollo de software',
      true,
      [],
      'Tecnología',
      'Av. Siempre Viva 123',
      '01234',
      'Ciudad de México',
      "Ciudad de México",
      'CDMX', '1234567890',
      '123',
      '0987654321',
      'www.azurian.com',
      'Juan Pérez',
      'juan.perez@azurian.com',
      'Ana Gómez', 'ana.gomez@azurian.com',
      'Axel Sánchez',
      'Jefe de Desarrollo',
      'Axel.sanchez@azurian.com'
    ));

    empresa.push(new DatosEmpresa(
      2,
      "Webpoint",
      "desarrollo",
      "Webpoint es una empresa que se encarga de...",
      false,
      [],
      "Desarrollo Web",
      "Calle Falsa 456",
      "56789",
      "Monterrey",
      "Monterrey",
      "Nuevo León",
      "1234567890",
      "456",
      "0987654321",
      "www.webpoint.com",
      "María López",
      "maria.lopez@webpoint.com",
      "Pedro Ruiz",
      "pedro.ruiz@webpoint.com",
      "Miguel Fernández",
      "Jefe de Proyecto",
      "miguel.fernandez@webpoint.com"
    ));

    empresa.push(new DatosEmpresa(
      3,
      "BluePixel",
      "desarrollo",
      "BluePixel es una empresa que se encarga de...",
      true,
      [],
      "Desarrollo Web",
      "Calle Falsa 456",
      "56789",
      "Monterrey",
      "Monterrey",
      "Nuevo León",
      "1234567890",
      "456",
      "0987654321",
      "www.webpoint.com",
      "Delfina López",
      "maria.lopez@webpoint.com",
      "Pedro Ruiz",
      "pedro.ruiz@webpoint.com",
      "Miguel Fernández",
      "Jefe de Proyecto",
      "miguel.fernandez@webpoint.com"
    ));
    empresa.push(new DatosEmpresa(
      4,
      "Kokonut Studio",
      "desarrollo",
      "Kokonut Studio es una empresa que se encarga de...",
      false,
      [],
      'Tecnología',
      'Av. Siempre Viva 123',
      '01234',
      'Ciudad de México',
      "Ciudad de México",
      'CDMX', '1234567890',
      '123',
      '0987654321',
      'www.azurian.com',
      'Juan Pérez',
      'juan.perez@azurian.com',
      'Mar Gómez', 'ana.gomez@azurian.com',
      'Axel Sánchez',
      'Jefe de Desarrollo',
      'Axel.sanchez@azurian.com'
    ));

    empresa.push(new DatosEmpresa(
      5,
      "Octopus",
      "desarrollo",
      "Octopus es una empresa que se encarga de...",
      true,
      [],
      "Desarrollo Web",
      "Calle Falsa 456",
      "56789",
      "Monterrey",
      "Monterrey",
      "Nuevo León",
      "1234567890",
      "456",
      "0987654321",
      "www.webpoint.com",
      "Kendra López",
      "maria.lopez@webpoint.com",
      "Pedro Ruiz",
      "pedro.ruiz@webpoint.com",
      "Miguel Fernández",
      "Jefe de Proyecto",
      "alfredo.fernandez@webpoint.com"
    ));
    return empresa;
  }
  getEmpresaConDatos(id: number): DatosEmpresa {
    const empresas = this.getEmpresasConDatos();
    return empresas.find(empresa => empresa.getIdEmpresa() === id)!;
  }


  getEmpresasFromDatabase(){
    let empresasString = this.cargarDeLocal("empresas");
    let empresasItem:any[]=[];
    if(empresasString){
      empresasItem=JSON.parse(empresasString);
    }else{
      alert("no hay empresas en base de datos :c");
    }
    return empresasItem.map(item=>{
      return new Empresa(item.id,item.nombre,item.sector,item.descripcion,item.activo);
    });
    
  }
  getProyectosFromDatabase(){
    let proyectosString = this.cargarDeLocal("proyectos");
    let proyectosItem:any[]=[];
    if(proyectosString){
      proyectosItem=JSON.parse(proyectosString);
    }else{
      alert("no hay empresas en base de datos :c");
    }
    return proyectosItem.map(item=>{
      return new Proyecto(item.id,item.idEmpresa,item.nombre,item.descripcion,item.modalidad,item.remuneracion,new Ubicacion(item.ubicacion.ciudad,item.ubicacion.estado),item.estadoDelProyecto,item.fechaDeExpiracion);
    });
  }

  actualizarEmpresas(empresas:Empresa[]):boolean{
    if(empresas){
      let empresasString=JSON.stringify(empresas);
      this.guardarEnLocal("empresas",empresasString);
      return true;
    }else{
      return false;
    }
    
  }
  actualizarProyectos(proyectos:Proyecto[],idEmpresa:number){
    if(proyectos){
      let proyectosString=JSON.stringify(proyectos);
      this.guardarEnLocal("proyectos",proyectosString);
      return true;
    }else{
      return false;
    }
  }
}

