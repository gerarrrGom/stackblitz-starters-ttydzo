import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Proyecto } from '../models/Proyecto';
import { Ubicacion } from '../models/Ubicacion';
import { RouterModule, Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-nuevo-proyecto',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css']
})
export class NuevoProyectoComponent {
  public formulario!: FormGroup;
  public hasUbicacion = false;
  public guardado:boolean=false;
  public modalidad!: number;
  public clickError:boolean=false;
  private proyectos: Proyecto[]=[];

  constructor(private fb: FormBuilder, private servicio: LocalStorageService,private router:Router) {
    //creamos los controles del formulario
    this.formulario = this.fb.group({
      txtNombreProyecto: ['', Validators.required],
      txtIdProyecto:['', Validators.required],
      txtDescripcion: ['', Validators.required],
      optModalidad: ['0', Validators.required],
      txtCiudad: ['', Validators.required],
      txtEstado: ['', Validators.required],
      chkRemuneracion: ['', Validators.required]
    });
    //cargamos los proyectos usando el servicio
    let proyectosStr =servicio.cargarDeLocal("proyectos");
    if(proyectosStr){
      let proyectosItems:any[]=JSON.parse(proyectosStr);
      proyectosItems.forEach(item =>{
        this.proyectos.push(new Proyecto(item.idProyecto,item.nombre,item.descripcion,item.modalidad,item.remuneracion,new Ubicacion(item.ubicacion.ciudad,item.ubicacion.estado),item.estadoDelProyecto));
      });
    }
    //subscriptor al select para mostrar o no "ubicacion"
    this.formulario.get("optModalidad")?.valueChanges.subscribe(valor => { this.modalidad = valor; });

    //cargamos los datos del proyecto si se busca completar la información
    let proyectoIncompleto = servicio.cargarDeLocal("proyecto");
    if(proyectoIncompleto){
      let item=JSON.parse(proyectoIncompleto);
      let proyecto=new Proyecto(item.idProyecto,item.nombre,item.descripcion,item.modalidad,item.remuneracion,new Ubicacion(item.ubicacion.ciudad,item.ubicacion.estado),item.estadoDelProyecto)

      this.formulario.setValue({
        txtNombreProyecto: proyecto.getNombre(),
        txtIdProyecto: proyecto.getIdProyecto(),
        txtDescripcion: proyecto.getDescripcion(),
        optModalidad: proyecto.getModalidad(),
        txtCiudad:proyecto.getUbicacion().getCiudad(),
        txtEstado: proyecto.getUbicacion().getEstado(),
        chkRemuneracion:proyecto.isRemuneracion()
      })
    }
  }

  enviar() {
    let nProyecto=this.getProyecto();
    let indice=this.proyectos.findIndex(proyecto=>{
      return proyecto.getIdProyecto()==nProyecto.getIdProyecto();
    })
    if(indice!=-1){
      this.proyectos[indice]=nProyecto;
    }else{
      this.proyectos.push(nProyecto);
    }
    this.servicio.guardarEnLocal("proyectos", JSON.stringify(this.proyectos));
    localStorage.removeItem("proyecto");
    this.salir();
  }

  guardarBorrador() {
    let nProyecto=this.getProyecto();
    let indice=this.proyectos.findIndex(proyecto=>{
      return proyecto.getIdProyecto()==nProyecto.getIdProyecto();
    })
    if(indice!=-1){
      this.proyectos[indice]=nProyecto;
    }else{
      this.proyectos.push(nProyecto);
    }
    this.servicio.guardarEnLocal("proyectos", JSON.stringify(this.proyectos));
    this.servicio.eliminarDelLocal("proyecto");
    this.salir();
    
  }
  getProyecto():Proyecto{
    let idProyecto:string=this.formulario.get("txtIdProyecto")?.value;
    let nombre: string = this.formulario.get("txtNombreProyecto")?.value;
    let descripcion: string = this.formulario.get("txtDescripcion")?.value;
    let modalidad: number = this.formulario.get("optModalidad")?.value;
    let ciudad: string = "";
    let estado: string = "";
    if (this.hasUbicacion) {
      ciudad = this.formulario.get("txtCiudad")?.value;
      estado = this.formulario.get("txtEstado")?.value;
    }
    let remuneracion: boolean = this.formulario.get("chkRemuneracion")?.value;
    return new Proyecto(idProyecto,nombre, descripcion, modalidad, remuneracion, new Ubicacion(ciudad, estado), 0);

  }
  salir(){
    this.router.navigate(['/proyectos']);
  }
}
