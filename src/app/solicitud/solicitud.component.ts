import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule , FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Alumno, crearAlumno } from '../models/Alumno';
import { LocalStorageService } from '../local-storage.service';
import { DatosEmpresa } from '../models/DatosEmpresa';
import { getLocaleDirection } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { DatePipe } from '@angular/common';
import { Proyecto } from '../models/Proyecto';


@Component({
  selector: 'app-solicitud',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './solicitud.component.html',
  styleUrl: './solicitud.component.css',
  providers: [DatePipe]
})
export class SolicitudComponent implements OnInit{
  info: FormGroup;
  isSubmitted = false;
  inputsDisabled = false;
  selectedEmpresaId: number | null = null;
  proyectos: Proyecto[] = [];  // todos los proyectos activos
  proyectosFiltrados: Proyecto[] = [];  // proyectos filtrados por empresa


  constructor(private fb: FormBuilder,private localStorageService: LocalStorageService,private datePipe: DatePipe) {
    this.info = this.fb.group({
      txtMatricula: ['', Validators.required],
      txtNoFolio: [''],
       txtFechaEntrega: [''],
      txtCarrera: [''],
      txtNombre: [''],
      txtDomicilio: [''],
      txtTel: [''],
      txtSemestre: [''],
      txtNoSeguro: [''],
      txtEmail: [''],
      txtNombreEmpresa: ['', Validators.required],
      txtGiro: [''],
      txtDireccionEmpresa: [''],
      txtCp: [''],
      txtLocalidad: [''],
      txtMunicipio: [''],
      txtEstado: [''],
      txtTelOficina: [''],
      txtExt: [''],
      txtTelFax: [''],
      txtPagina: [''],
      txtNombreJefe: [''],
      txtEmailEmpresa: [''],
      txtArea: [''],
      txtJefeInteres: [''],
      txtAreaEmail: [''],
      txtNombreInmediato: [''],
      txtCargo: [''],
      txtEmailInmediato: [''],
      txtDocumento: [''],
      txtInicio: [''],
      txtTermino: [''],
      txtDe: [''],
      txtHrs: [''],
      txtA: [''],
      txtHora: [''],
      empresaSelect: ['', Validators.required],
      txtSelecPry: ['', Validators.required]
    });
    this.obtenerDatosAlumno();
  }

  ngOnInit() {
    const savedData = localStorage.getItem('solicitudData');
    if (savedData) {
      const formData = JSON.parse(savedData);
      this.info.patchValue(formData);
      this.isSubmitted = true;
      this.info.disable();
      this.inputsDisabled = true;
    }else {
      // Establecer la fecha actual en txtFechaEntrega si no hay datos guardados
      const fechaActual = new Date();
      const fechaFormateada = this.datePipe.transform(fechaActual, ' dd/MM/yyyy');
      this.info.patchValue({
        txtFechaEntrega: fechaFormateada
      });
    }
    this.proyectos = this.localStorageService.getProyectosFromDatabase();
  }


  obtenerDatosAlumno() {
    const alumno: Alumno = crearAlumno();
    this.info.patchValue({
      txtMatricula: alumno.getMatricula(),
      txtNoFolio: alumno.getNoFolio(),
      //txtFechaEntrega: alumno.getFechaEntrega(),
      txtCarrera: alumno.getCarrera(),
      txtNombre: alumno.getNombre(),
      txtDomicilio: alumno.getDomicilio(),
      txtTel: alumno.getTelefono(),
      txtSemestre: alumno.getSemestre(),
      txtNoSeguro: alumno.getNoSeguro(),
      txtEmail: alumno.getEmail()
    });
  }

  seleccionEmpresa(event: Event): void {
    const formValues = this.info.value
    const selectElement = event.target as HTMLSelectElement;
    const idEmpresa = Number(selectElement.value);
    if (idEmpresa) {
      this.selectedEmpresaId = idEmpresa;
      this.obtenerDatosEmpresa(idEmpresa);
      this.filtrarProyectosPorEmpresa(idEmpresa);
    }
    /*if (this.inputsDisabled) {
      this.info.enable();
      this.inputsDisabled = false;
    } else {
      this.info.disable();
      this.inputsDisabled = true;
    }*/
  }
  
   obtenerDatosEmpresa(idEmpresa: number) {
    const empresa: DatosEmpresa = this.localStorageService.getEmpresaConDatos(idEmpresa);
    this.info.patchValue({
      txtNombreEmpresa: empresa.getNombre(),
      txtGiro: empresa.getGiro(),
      txtDireccionEmpresa: empresa.getDireccion(),
      txtCp: empresa.getCodigoP(),
      txtLocalidad: empresa.getLocalidad(),
      txtMunicipio: empresa.getMunicipio(),
      txtEstado: empresa.getEstado(),
      txtTelOficina: empresa.getTelOficinas(),
      txtExt:empresa.getExt(),
      txtText: empresa.getExt(),
      txtTelFax: empresa.getTelFax(),
      txtPagina: empresa.getPaginaWeb(),
      txtNombreJefe: empresa.getJefeRH(),
      txtEmailEmpresa: empresa.getEmailDatos(),
      txtArea: empresa.getArea(),
      txtJefeInteres: empresa.getJefeArea(),
      txtAreaEmail: empresa.getEmailArea(),
      txtNombreInmediato: empresa.getJefeInmediato(),
      txtCargo: empresa.getCargo(),
      txtEmailInmediato: empresa.getEmailInmediato()
    });
  }

  filtrarProyectosPorEmpresa(idEmpresa: number) {
    this.proyectosFiltrados = this.proyectos.filter(proyecto => proyecto.getIdEmpresa() === idEmpresa&&proyecto.getEstadoDelProyecto()==2);
  }
  
  agregarEmpresa() {
    //const formValues = this.info.value;
    
   // localStorage.setItem('empresaDatos', JSON.stringify(formValues));

   /* if (this.inputsDisabled) {
      this.info.enable();
      this.inputsDisabled = false;
    } else {
      this.info.disable();
      this.inputsDisabled = true;
    }*/

    alert('Puedes agregar la empresa de tu preferencia a realizar tus Estancias Profesionales.');
  }



  enviarSolicitud() {
    const formValues = this.info.value;
    localStorage.setItem('solicitudData', JSON.stringify(formValues));
    this.isSubmitted = true;
    this.info.disable();
    this.inputsDisabled = true;
    alert('Se guardo y envío correctamente la Solicitud.');
  }
}