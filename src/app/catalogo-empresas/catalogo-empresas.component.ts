import { Component } from '@angular/core';
import { Proyecto } from '../models/Proyecto';
import { LocalStorageService } from '../local-storage.service';
import { Empresa } from '../models/Empresa';

@Component({
  selector: 'app-catalogo-empresas',
  standalone: true,
  imports: [],
  templateUrl: './catalogo-empresas.component.html',
  styleUrl: './catalogo-empresas.component.css'
})
export class CatalogoEmpresasComponent {
  public proyectos: Proyecto[] = [];  // todos los proyectos activos
  public proyectosFiltrados: Proyecto[] = [];  // proyectos filtrados por empresa
  public empresas: Empresa[] = [];
  public abrirProyectos:boolean[]=[];

  constructor(private localStorageService: LocalStorageService){
    this.localStorageService.actualizarEmpresas(this.localStorageService.listEmpresas());
    this.empresas.forEach((empresa)=>{this.abrirProyectos.push(false)})
    this.proyectos=this.localStorageService.getProyectosFromDatabase();
    this.empresas=localStorageService.getEmpresasFromDatabase();
    console.log(this.empresas);
  }

  empresaConPry(id: number){
    return this.proyectos.some(proyecto=>{return proyecto.getIdEmpresa()==id &&proyecto.getEstadoDelProyecto()==2
    });
  }

  getIndexEmpresa(id:number):number{
    let indice = this.empresas.findIndex(empresa => {
      return id === empresa.getIdEmpresa();
    });
    return indice;
  }
  // id de la empresa
  verProyectos(id: number):void{  
    
    if(this.abrirProyectos[this.getIndexEmpresa(id)]==false){
      this.abrirProyectos[this.getIndexEmpresa(id)]=true;
    }else{
      this.abrirProyectos[this.getIndexEmpresa(id)]=false;
    }   

}
  obtenerModalidad(codigo:number):string {
    codigo = Number(codigo);  // Convertir a número
    switch (codigo) {
        case 0:
            return "Remoto";
        case 1:
            return "Presencial";
        case 2:
            return "Mixto";
        default:
            return "desconocido";
    }
  }

  obtenerRemuneracion(remuneracion:Boolean):string {
    remuneracion = Boolean(remuneracion); 
    switch(remuneracion){
      case true:
        return "Es remunerable";
      case false:
        return "No es remunerable";
      default:
        return "Indefinido";
    }
  }
  

  getProyectosEmpresa(idEmpresa:number){
    console.log(idEmpresa);
    console.log(this.proyectos);
    let pry:Proyecto[]=[];
    for(let proyecto of this.proyectos){
      if(proyecto.getIdEmpresa()===idEmpresa){
          pry.push(proyecto);
      }
    }
    return pry;
  }
  getFechaFormato(date:Date){
    let dias=["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
     let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
     return dias[date.getDay()]+" "+date.getDate()+" "+meses[date.getMonth()]+" "+date.getFullYear();
  }

}
