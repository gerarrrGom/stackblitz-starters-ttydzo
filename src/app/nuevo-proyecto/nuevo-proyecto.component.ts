import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Proyecto } from '../models/Proyecto';
import { Ubicacion } from '../models/Ubicacion';
import { RouterModule, Router } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-nuevo-proyecto',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule,MatFormFieldModule, MatInputModule, MatDatepickerModule],
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
  public minDate : Date=new Date();
  constructor(private fb: FormBuilder, private servicio: LocalStorageService, private router: Router) {

    //creamos los controles del formulario
    this.formulario = this.fb.group({
      txtNombreProyecto: ['', Validators.required],
      txtIdProyecto: [{ value: '', disabled: true }, Validators.required],
      txtDescripcion: ['', Validators.required],
      optModalidad: ['0', Validators.required],
      txtCiudad: ['', Validators.required],
      txtEstado: ['', Validators.required],
      chkRemuneracion: ['', Validators.required],
      pickerFecha:['',Validators.required],
      txtTamañoEquipo:['',Validators.required]
    });

    //cargamos los proyectos usando el servicio
    this.proyectos=servicio.getProyectosFromDatabase();

    //subscriptor al select para mostrar o no "ubicacion"
    this.formulario.get("optModalidad")?.valueChanges.subscribe(valor => { this.modalidad = valor; });
    this.modalidad = 0;

    //cargamos los datos del proyecto si se busca completar la información
    let proyectoIncompleto = servicio.cargarDeLocal("proyecto");
    if (proyectoIncompleto) {
      let item = JSON.parse(proyectoIncompleto);
      let proyecto = new Proyecto(item.idProyecto, item.idEmpresa, item.nombre, item.descripcion, item.modalidad, item.remuneracion, new Ubicacion(item.ubicacion.ciudad, item.ubicacion.estado), item.estadoDelProyecto,new Date(item.fechaDeExpiracion));

      this.formulario.setValue({
        txtNombreProyecto: proyecto.getNombre(),
        txtIdProyecto: proyecto.getIdProyecto(),
        txtDescripcion: proyecto.getDescripcion(),
        optModalidad: proyecto.getModalidad(),
        txtCiudad: proyecto.getUbicacion().getCiudad(),
        txtEstado: proyecto.getUbicacion().getEstado(),
        chkRemuneracion: proyecto.isRemuneracion(),
        pickerFecha:proyecto.getFechaDeExpiracion(),
        txtTamañoEquipo:4
      });
    } else {
      // Generar un nuevo ID si no hay un proyecto incompleto cargado
      this.formulario.get("txtIdProyecto")?.setValue(this.generarNuevoId());
    }
  }

  generarNuevoId(): string {
    let nuevoId:string;
    do {
      nuevoId = this.randomId();
    } while (this.proyectos.some(proyecto => proyecto.getIdProyecto() === nuevoId));
    return nuevoId;
  }

  randomId(): string {
    return Math.floor(100 + Math.random() * 900).toString(); // Genera un ID aleatorio de 3 dígitos
  }

  enviar() {
    let nProyecto = this.getProyecto(1);
    let indice = this.proyectos.findIndex(proyecto => proyecto.getIdProyecto() === nProyecto.getIdProyecto());
    if (indice !== -1) {
      this.proyectos[indice] = nProyecto;
    } else {
      this.proyectos.push(nProyecto);
    }
    this.servicio.actualizarProyectos(this.proyectos,1);
    this.servicio.eliminarDelLocal("proyecto");
    this.salir();
  }

  guardarBorrador() {
    let nProyecto = this.getProyecto(0);
    let indice = this.proyectos.findIndex(proyecto => proyecto.getIdProyecto() === nProyecto.getIdProyecto());
    if (indice !== -1) {
      this.proyectos[indice] = nProyecto;
    } else {
      this.proyectos.push(nProyecto);
    }
    this.servicio.actualizarProyectos(this.proyectos,1);
    this.servicio.eliminarDelLocal("proyecto");
    this.salir();
  }

  getProyecto(estadoPry: number): Proyecto {
    let idProyecto: string = this.formulario.get("txtIdProyecto")?.value;
    let nombre: string = this.formulario.get("txtNombreProyecto")?.value;
    let descripcion: string = this.formulario.get("txtDescripcion")?.value;
    let modalidad: number = this.formulario.get("optModalidad")?.value;
    let ciudad: string = "";
    let estado: string = "";
    if (this.hasUbicacion) {
      ciudad = this.formulario.get("txtCiudad")?.value;
      estado = this.formulario.get("txtEstado")?.value;
    }
    let fecha=this.formulario.get("pickerFecha")?.value;
    let remuneracion: boolean = this.formulario.get("chkRemuneracion")?.value;
    return new Proyecto(idProyecto, 1, nombre, descripcion, modalidad, remuneracion, new Ubicacion(ciudad, estado), estadoPry,fecha);
  }

  salir() {
    this.router.navigate(['/proyectos']);
  }
}
