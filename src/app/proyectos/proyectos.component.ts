import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Proyecto } from '../models/Proyecto';
import { LocalStorageService } from '../local-storage.service';
import { Ubicacion } from '../models/Ubicacion';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Empresa } from '../models/Empresa';


@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  public empresas:Empresa[]=[];
  public proyectos:Proyecto[]=[];
  public proyectosEmpresa:Proyecto[]=[];
  public formulario!:FormGroup;
  public busqueda:string="";
  public filtro:number=-1;
  public optEmpresa:FormControl=new FormControl('');
  private idEmpresaSeleccionada!:number;
  constructor(private servicio:LocalStorageService,private router:Router,private fb: FormBuilder){
    this.servicio.actualizarEmpresas(this.servicio.listEmpresas());
    this.empresas=servicio.getEmpresasFromDatabase();//esto es para probar, se reemplaza por el id de la empresa logueada.
    this.proyectos=servicio.getProyectosFromDatabase();
    //inicializar controles del formulario
    this.formulario=fb.group({
      txtBuscar:[''],
      optFiltrar:[this.filtro]
    });
    //suscribir al txtBuscar para filtrar
    this.formulario.get("txtBuscar")?.valueChanges.subscribe(valor => { this.busqueda = valor+""; });
    this.formulario.get("optFiltrar")?.valueChanges.subscribe(valor => { this.filtro = valor});
    //se selecciona la primera empresa del opt para asegurar el buen funcionamiento
    this.optEmpresa.setValue(this.empresas[0].getIdEmpresa());
    this.seleccionarNuevaEmpresa();

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
        case 6:
            return 'Expirado';
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
  getProyectosBusqueda(){
    let proyectosFiltrado = this.proyectosEmpresa.filter(proyecto => {
      let proyectoNombre:String=proyecto.getNombre().toString();
      let proyectoId:String=proyecto.getIdProyecto().toString();
      return proyectoId.startsWith(this.busqueda)||proyectoNombre.startsWith(this.busqueda);
    });
    console.log(proyectosFiltrado);
    return proyectosFiltrado;
  }
  public seleccionarNuevaEmpresa(){
    this.idEmpresaSeleccionada=this.optEmpresa.value;
    this.proyectosEmpresa=[];
    alert(this.idEmpresaSeleccionada);
    for(let proyecto of this.proyectos){
      if(proyecto.getIdEmpresa()==this.idEmpresaSeleccionada){
        this.proyectosEmpresa.push(proyecto);
      }
    }
  }
  
}
