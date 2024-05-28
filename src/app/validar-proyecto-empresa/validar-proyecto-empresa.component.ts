import { Component, AfterViewInit } from '@angular/core';
import { Empresa} from '../models/Empresa';
import { LocalStorageService } from '../local-storage.service'; 
import { RouterModule } from '@angular/router';
import { Proyecto } from '../models/Proyecto';

@Component({
  selector: 'app-validar-proyecto-empresa',
  standalone:true,
  imports:[RouterModule],
  templateUrl: './validar-proyecto-empresa.component.html',
  styleUrls: ['./validar-proyecto-empresa.component.css']
})
export class ValidarProyectoEmpresaComponent{
  public empresas: Empresa[] = [];
  //ya se le olvidó
  public abrirProyectos:boolean[]=[];


  constructor(private localStorageService: LocalStorageService) {
    this.cargarDatos();
    this.empresas.forEach((empresa)=>{this.abrirProyectos.push(false)})
  }
  cargarDatos(): void {
    this.empresas = this.localStorageService.listEmpresas();
    //this.localStorageService.guardarEnLocal('empresas', JSON.stringify(this.empresas));
    /*const storedEmpresas = JSON.parse(this.localStorageService.cargarDeLocal('empresas')) || [];
    this.empresas = storedEmpresas.map((data: any) => new Empresa(data._idEmpresa, data._nombre, data._area, data._descripción, data._opiniones, data._pago, data._proyectos));
    const empresaAceptada = JSON.parse(this.localStorageService.cargarDeLocal('empresaAceptada')!);
    if (empresaAceptada) {
      console.log('Empresa Aceptada:', empresaAceptada);
    }

   
    //this.mostrarEmpresas();*/
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


//id de la empresa
//nombre del proyecto
  aceptar(id:number,nombre:string){
    let indice = this.getIndexEmpresa(id);
    let proyectos=this.empresas[indice].getProyectos();
    let proyectoActual!:Proyecto;
    //colocar como aceptado un proyecto dado un nombre
    for(let i=0;i<proyectos.length;i++){
      proyectoActual=proyectos[i];
      if(proyectoActual.getNombre()===nombre){
        proyectoActual.setEstadoDelProyecto(2);
        alert("avisando a la empresa que ha sido aceptado su proyecto...");
        break;
      }
    }
    this.localStorageService.guardarEnLocal("proyectos_" + id,JSON.stringify(proyectos));
    //let pryAceptado= this.localStorageService.cargarDeLocal("proyectos[i]")
    console.log(proyectoActual);
    console.log(this.localStorageService.cargarDeLocal("proyectos_"+id));
  }
  
  rechazar(id:number,nombre:string){
    let indice = this.getIndexEmpresa(id);
    let proyectos=this.empresas[indice].getProyectos();
    let proyectoActual!:Proyecto;
    //colocar como aceptado un proyecto dado un nombre
    for(let i=0;i<proyectos.length;i++){
      proyectoActual=proyectos[i];
      if(proyectoActual.getNombre()===nombre){
        proyectoActual.setEstadoDelProyecto(5);
        alert("Avisando a la empresa que ha sido rechazado su proyecto...");
        break;
      }
    }
    this.localStorageService.guardarEnLocal("proyectos_" + id,JSON.stringify(proyectos));
    //let pryAceptado= this.localStorageService.cargarDeLocal("proyectos[i]")
    console.log(proyectoActual);
    console.log(this.localStorageService.cargarDeLocal("proyectos_"+id));
  }
  obtenerModalidad(codigo:number):string {
    switch (codigo) {
        case 0:
            return 'Remoto';
        case 1:
            return 'Presencial';
        case 2:
            return 'Mixto';
        default:
            return 'Desconocido';
    }
  }
}