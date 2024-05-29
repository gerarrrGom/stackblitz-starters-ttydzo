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
      true, [
      new Proyecto("1", 1, "CRUD", "Entender de POO", 0, true, new Ubicacion("Oficinas en Ciudad de México", "Ciudad de México"), 1),
      new Proyecto("2", 1, "Base de datos", "Entender de POO y de base de datos", 7000, true, new Ubicacion("Oficinas en Ciudad de México", "Ciudad de México"), 1)
    ]
    ));

    empresas.push(new Empresa(
      2, "Webpoint", "desarrollo", "Webpoint es una empresa que se encarga de...",
      false, [
      new Proyecto("3", 2, "Angular", "Entender de POO y conocer el framework de Angular", 6000, true, new Ubicacion("Home Office", "Monterrey Nuevo León"), 1)
    ]
    ));

    empresas.push(new Empresa(
      3, "BluePixel", "desarrollo", "BluePixel es una empresa que se encarga de...",
      true, [
      new Proyecto("4", 3, "SpringBoot", "Crear CRUD con SpringBoot", 7000, true, new Ubicacion("Home Office", "Escobedo Nuevo León"), 1)
    ]
    ));

    empresas.push(new Empresa(
      4, "Kokonut Studio", "desarrollo", "Kokonut Studio es una empresa que se encarga de...",
      false, [
      new Proyecto("5", 4, "Scrumb", "Crear CRUD haciendo uso de la metodología Scrumb", 1, true, new Ubicacion("loma", "oaxaca"), 1)
    ]
    ));

    empresas.push(new Empresa(
      5, "Octopus", "desarrollo", "Octopus es una empresa que se encarga de...",
      true, [
      new Proyecto("6", 5, "RUP", "Realizar un sistema que permita registrar préstamos de libros en la biblioteca escolar haciendo uso de la metodología RUP", 7500, true, new Ubicacion("Home Office", "Tuxtepec Oaxaca"), 1)
    ]
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
}

