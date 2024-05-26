import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Proyecto } from '../models/Proyecto';
import { LocalStorageService } from '../local-storage.service';
import { Ubicacion } from '../models/Ubicacion';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  public proyectos:Proyecto[]=[];

  constructor(private servicio:LocalStorageService,private router:Router){
    let proyectosStr =servicio.cargarDeLocal("proyectos");
    if(proyectosStr){
      let proyectosItems:any[]=JSON.parse(proyectosStr);
      proyectosItems.forEach(item =>{
        this.proyectos.push(new Proyecto(item.idProyecto,item.idEmpresa,item.nombre,item.descripcion,item.modalidad,item.remuneracion,new Ubicacion(item.ubicacion.ciudad,item.ubicacion.estado),item.estadoDelProyecto));
      });
    }
    
  }
  obtenerEstado(codigoEstado:number):string {
    switch (codigoEstado) {
        case 0:
            return 'Sin enviar';
        case 1:
            return 'En revisión';
        case 2:
            return 'Publicado';
        case 3:
            return 'Comenzado';
        case 4:
            return 'Terminado';
        case 5:
            return 'Rechazado';
        default:
            return 'Desconocido';
    }
  }
  continuarEdicion(id:string):void{
    alert(id);
    let indice=this.proyectos.findIndex(proyecto=>{return proyecto.getIdProyecto()==id});
    this.servicio.guardarEnLocal("proyecto",JSON.stringify(this.proyectos[indice]));
    this.router.navigate(['/nuevoProyecto'])
  } 
  nuevoProyecto():void{
    this.servicio.eliminarDelLocal("proyecto");
    this.router.navigate(['/nuevoProyecto']);
  }
}
