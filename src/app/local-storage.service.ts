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
      1, "Azurian", "desarrollo", "Azurian es una compañía transnacional especializada en consultoría estratégica de tecnología, líder en el mercado Latinoamericano desde hace dos décadas.",
      true,"https://media.licdn.com/dms/image/D4E0BAQHtPrLGUuJUrQ/company-logo_200_200/0/1688502132659/azurian_logo?e=2147483647&v=beta&t=qo40nODJ_1GCyt7LpaknWRNCvtuMo7O9Npomu2vCggE"
    ));

    empresas.push(new Empresa(
      2, "Webpoint", "desarrollo", "Somos una empresa que ofrece servicios de WIFI Marketing para establecimientos de comercio o empresariales.",
      false,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0yxpcJTwXXvdZC5NucyEKapKi_92qwumCjA&s"
    ));

    empresas.push(new Empresa(
      3, "BluePixel", "desarrollo", "En BluePixel, te ofrecemos una solución integral para mejorar la experiencia de tus usuarios y aumentar la efectividad de tu sitio web. ",
      true,"https://media.licdn.com/dms/image/C4E0BAQFUNKLvQlPcMQ/company-logo_200_200/0/1631356769276?e=2147483647&v=beta&t=vp5upZam_apU_jddE8Zx4LOEJ2TM2XK-tPW8MQHm_JY"
    ));

    empresas.push(new Empresa(
      4, "Kokonut Studio", "desarrollo", "Kokonut Studio es un estudio interactivo donde centramos nuestro enfoque en tecnologías emergentes, nos gusta crear apps, juegos y experiencias inmersivas.",
      false,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ-SbOs7yMgauu6yv3M-GESKYdZhmohSwjKw&s"
    ));

    empresas.push(new Empresa(
      5, "Octopus", "desarrollo", "Octopus es la agencia de marketing digital #1 en México. Ofrecemos servicios de SEO, PPC, diseño web y más. Conócenos y descubre cómo te ayudamos a crecer.",
      true,"https://media.licdn.com/dms/image/C4E0BAQFP6sdy5RIKdA/company-logo_200_200/0/1630608710919/octopus_digital_group_logo?e=2147483647&v=beta&t=jceco-86v2EHeC8598FbDMK0CpTnxH6zXflFfiz7HXY"
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
      '',
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
      '',
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
      '',
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
      '',
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
      '',
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
    }
    return empresasItem.map(item=>{
      let empresa=(new Empresa(item.idEmpresa,item.nombre,item.area,item.descripcion,item.pago,item.logo));
      return empresa;
    }); 
    
  }
  getProyectosFromDatabase(){
    let proyectosString = this.cargarDeLocal("proyectos");
    let proyectosItem:any[]=[];
    if(proyectosString){
      proyectosItem=JSON.parse(proyectosString);
    }else{

    }
    return proyectosItem.map(item=>{
      return new Proyecto(item.idProyecto,item.idEmpresa,item.nombre,item.descripcion,item.modalidad,item.remuneracion,new Ubicacion(item.ubicacion.ciudad,item.ubicacion.estado),item.estadoDelProyecto,new Date(item.fechaDeExpiracion));
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

