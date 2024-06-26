import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { LocalStorageService } from '../local-storage.service';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-solitud-validar',
  standalone: true,
  imports: [ReactiveFormsModule, MatDatepickerModule,MatNativeDateModule,MatInputModule],
  templateUrl: './solitud-validar.component.html',
  styleUrl: './solitud-validar.component.css',

  providers: [DatePipe,MatDatepickerModule, MatNativeDateModule]
})
export class SolitudValidarComponent implements OnInit {
  info: FormGroup;

  constructor(private fb: FormBuilder,private localStorageService: LocalStorageService,private datePipe: DatePipe, private db:DatabaseService) {
    this.info= this.fb.group({
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
      empresaSelect: ['-999', Validators.required],
      txtSelecPry: ['', Validators.required]
    });
  // this.obtenerDatosAlumno('21010021');
  }

  ngOnInit() {
    
  }

rechazarSolicitud() {
    const motivo = prompt("Ingrese el motivo del rechazo:");
    if (motivo) {
      alert(`Solicitud rechazada por el siguiente motivo: ${motivo}`);
      
    }
  }
}
