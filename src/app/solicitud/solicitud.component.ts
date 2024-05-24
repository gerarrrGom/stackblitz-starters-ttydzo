import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule , FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Alumno, crearAlumno } from '../models/Alumno';


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

  constructor(private fb: FormBuilder) {
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
      txtNombreEmpresa: [''],
      txtGiro: [''],
      txtDireccionEmpresa: [''],
      txtCp: [''],
      localidad: [''],
      municipio: [''],
      estado: [''],
      telOficina: [''],
      ext: [''],
      telFax: [''],
      pagina: [''],
      nombreJefe: [''],
      emailEmpresa: [''],
      area: [''],
      jefeInteres: [''],
      areaEmail: [''],
      nombreInmediato: [''],
      cargo: [''],
      emailInmediato: [''],
      documento: [''],
      inicio: [''],
      termino: [''],
      de: [''],
      hrs: [''],
      a: [''],
      hora: ['']
    });
  }

  ngOnInit() {
    const salvarDatos = localStorage.getItem('solicitudHtml');
    if (salvarDatos) {
      const container = document.createElement('div');
      container.innerHTML = salvarDatos;
      const formElements = container.querySelectorAll('input, select, textarea');
      formElements.forEach((element: any) => {
        const name = element.getAttribute('formcontrolname');
        if (name) {
          this.info.get(name)?.setValue(element.value);
        }
      });
      this.isSubmitted = true;
      this.info.disable(); 
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
  enviarSolicitud() {
    const formElement = document.querySelector('form');
    if (formElement) {
      localStorage.setItem('solicitudHtml', formElement.outerHTML);
    }
    this.isSubmitted = true;
    this.info.disable(); 
    alert('Datos guardados y enviados correctamente.');
  }
}
