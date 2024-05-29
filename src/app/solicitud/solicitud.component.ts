import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule , FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Alumno, crearAlumno } from '../models/Alumno';
import { LocalStorageService } from '../local-storage.service';
import { DatosEmpresa } from '../models/DatosEmpresa';
import { getLocaleDirection } from '@angular/common';
import { FormsModule } from '@angular/forms'; 


@Component({
  selector: 'app-solicitud',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './solicitud.component.html',
  styleUrl: './solicitud.component.css'
})
export class SolicitudComponent implements OnInit{
  info: FormGroup;
  isSubmitted = false;
  inputsDisabled = false;
  selectedEmpresaId: number | null = null;


  constructor(private fb: FormBuilder,private localStorageService: LocalStorageService) {
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
      txtHora: ['']
    });
  }

  ngOnInit() {
    const savedData = localStorage.getItem('solicitudData');
    if (savedData) {
      const formData = JSON.parse(savedData);
      this.info.patchValue(formData);
      this.isSubmitted = true;
      this.info.disable();
      this.inputsDisabled = true;
    }
  }

  obtenerDatosAlumno() {
    const alumno: Alumno = crearAlumno();
    this.info.patchValue({
      txtMatricula: alumno.getMatricula(),
      txtNoFolio: alumno.getNoFolio(),
      txtFechaEntrega: alumno.getFechaEntrega(),
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
    const selectElement = event.target as HTMLSelectElement;
    const idEmpresa = Number(selectElement.value);
    if (idEmpresa) {
      this.obtenerDatosEmpresa(idEmpresa);
    }
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
  
  agregarEmpresa() {
    const formValues = this.info.value;
    
   // localStorage.setItem('empresaDatos', JSON.stringify(formValues));

    if (this.inputsDisabled) {
      this.info.enable();
      this.inputsDisabled = false;
    } else {
      this.info.disable();
      this.inputsDisabled = true;
    }

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

