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
  public proyectos:Proyecto[]=[];
  public abrirProyectos:boolean[]=[];
 

  constructor(private localStorageService: LocalStorageService) {
    this.localStorageService.actualizarEmpresas(this.localStorageService.listEmpresas());
    this.empresas.forEach((empresa)=>{this.abrirProyectos.push(false)})
    this.proyectos=this.localStorageService.getProyectosFromDatabase();
    //this.proyectos=localStorageService.getProyectosFromDatabase();
    this.empresas=localStorageService.getEmpresasFromDatabase();
    console.log(this.empresas);
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

//id de la empresa //id del proyecto
  aceptar(id:number,idpry:string){
    let indice = this.getIndexEmpresa(id);
    let proyectosDeEmpresa = this.proyectos.filter(proyecto => proyecto.getIdEmpresa() === id);
    let proyectoActual!:Proyecto;
    //colocar como aceptado un proyecto dado un id
    for(let i=0;i<proyectosDeEmpresa.length;i++){
      proyectoActual=proyectosDeEmpresa[i];
      if(proyectoActual.getIdProyecto()===idpry){
        proyectoActual.setEstadoDelProyecto(2);
        alert("avisando a la empresa que ha sido aceptado su proyecto...");
        break;
      }
    }
    this.localStorageService.actualizarProyectos(this.proyectos,10);
    //let pryAceptado= this.localStorageService.cargarDeLocal("proyectos[i]")
    console.log(proyectoActual);
    console.log(this.localStorageService.cargarDeLocal("proyectos_"+id));
  }

  rechazar(id:number,idpry:string) {
    let btnEnviarMjs = document.getElementById('btnEnviarMjs');
    let messageTextArea = document.getElementById('message-text') as HTMLTextAreaElement;
    if (btnEnviarMjs && messageTextArea) {
        const messageText = messageTextArea.value.trim();
        if (messageText == "") {
          alert("Por favor, escriba un mensaje antes de enviar.");
        } else {
    let indice = this.getIndexEmpresa(id);
    let proyectosDeEmpresa = this.proyectos.filter(proyecto => proyecto.getIdEmpresa() === id);
    let proyectoActual!:Proyecto;
    //colocar como aceptado un proyecto dado un id
    for(let i=0;i<proyectosDeEmpresa.length;i++){
      proyectoActual=proyectosDeEmpresa[i];
      if(proyectoActual.getIdProyecto()===idpry){
        proyectoActual.setEstadoDelProyecto(5);
        this.alerta();
        break;
      }
    }
    this.localStorageService.actualizarProyectos(this.proyectos,10);
    //let pryAceptado= this.localStorageService.cargarDeLocal("proyectos[i]")
    console.log(proyectoActual);
    console.log(this.localStorageService.cargarDeLocal("proyectos_"+id));
  }

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
  alerta(){
    alert("Notificando a la empresa el motivo del rechazo...")
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


}