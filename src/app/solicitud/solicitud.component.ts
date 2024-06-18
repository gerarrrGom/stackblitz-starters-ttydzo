//Amaranny correo: anyoh2003@gmail.com

import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule , FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Alumno, crearAlumno } from '../models/Alumno';
import { LocalStorageService } from '../local-storage.service';
import { DatosEmpresa } from '../models/DatosEmpresa';
import { getLocaleDirection } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { DatePipe } from '@angular/common';
import { Proyecto } from '../models/Proyecto';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { DatabaseService } from '../database.service';
import { Empresa } from '../models/Empresa';
import { Ubicacion } from '../models/Ubicacion';


@Component({
  selector: 'app-solicitud',
  standalone: true,
  imports: [ReactiveFormsModule, MatDatepickerModule,MatNativeDateModule,MatInputModule],
  templateUrl: './solicitud.component.html',
  styleUrl: './solicitud.component.css',

  providers: [DatePipe,MatDatepickerModule, MatNativeDateModule]
})
export class SolicitudComponent implements OnInit{
  info: FormGroup;
  isSubmitted = false;
  inputsDisabled = false;
  selectedEmpresaId: number | null = null;
  empresas:Empresa[]=[];
  proyectos: Proyecto[] = [];  // todos los proyectos activos
  proyectosFiltrados: Proyecto[] = [];  // proyectos filtrados por empresa
  estado=false;
  private allDatosEmpresas: DatosEmpresa[]=[];
  private empresasObjeto!:any[];
  private proyectosObjeto!:any[];
  private datosEmpresaObjeto!:any[];



  constructor(private fb: FormBuilder,private localStorageService: LocalStorageService,private datePipe: DatePipe, private db:DatabaseService) {
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
    this.db.getEmpresas().subscribe(data=>{this.empresasObjeto=data
      this.darFormatoAEmpresa();
    });
    this.db.getProyectos().subscribe(data=>{this.proyectosObjeto=data
      this.darFormatoAProyectos();
    });
    this.db.getDatosEmpresa().subscribe(data=>{this.datosEmpresaObjeto=data
      this.crearDatosEmpresa();
    });
      
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


  seleccionEmpresa(id: number): void {
      this.selectedEmpresaId = id;
      this.obtenerDatosEmpresa(id);
      this.filtrarProyectosPorEmpresa(id);
    /*if (this.inputsDisabled) {

  seleccionEmpresa(event: Event): void {
    const formValues = this.info.value
    const selectElement = event.target as HTMLSelectElement;
    const idEmpresa = Number(selectElement.value);
    if (idEmpresa) {
      this.obtenerDatosEmpresa(idEmpresa);
    }
    if (this.inputsDisabled) {
      this.info.enable();
      this.inputsDisabled = false;
    } else {
      this.info.disable();
      this.inputsDisabled = true;
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

    if (this.inputsDisabled) {>>>>>>> 3ffd2aeec0869018a47c222710b6c5a055dd6d13
      this.info.enable();
      this.inputsDisabled = false;
    } else {
      this.info.disable();
      this.inputsDisabled = true;
    }*/
  }
  
   obtenerDatosEmpresa(idEmpresa: number) {
    var empresa:DatosEmpresa;
    let datos :DatosEmpresa | undefined = this.allDatosEmpresas.find(datos=>{return datos.getIdEmpresa()==idEmpresa});
    if(datos){
      empresa=datos;
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
        txtArea: empresa.getOcupacionPrincipal(),
        txtJefeInteres: empresa.getJefeArea(),
        txtAreaEmail: empresa.getEmailArea(),
        txtNombreInmediato: empresa.getJefeInmediato(),
        txtCargo: empresa.getCargo(),
        txtEmailInmediato: empresa.getEmailInmediato()
      });

    }else{
      alert("FALLO AL LEER LOS DATOS DE EMPRESA");
    }
  }

  filtrarProyectosPorEmpresa(idEmpresa: number) {
    this.proyectosFiltrados = this.proyectos.filter(proyecto => proyecto.getIdEmpresa() === idEmpresa&&proyecto.getEstadoDelProyecto()==2);
  }
  
  agregarEmpresa():void{
   /* if(this.estado){
      this.estado=false;
    }else{
      this.estado=true;
    }*/
   this.estado=true;
  }

  
  ocultar():void{
    this.estado=false;
  }

  enviarSolicitud() {
    const formValues = this.info.value;
    localStorage.setItem('solicitudData', JSON.stringify(formValues));
    this.isSubmitted = true;
    this.info.disable();
    this.inputsDisabled = true;
    alert('Se guardo y envío correctamente la Solicitud.');
  }

  darFormatoAEmpresa(){
    this.empresas=[];
    this.empresasObjeto.forEach(empresa=>{this.empresas.push(new Empresa(empresa.idEmpresa,empresa.nombre,empresa.ocupacionPrincipal,empresa.descripcion,empresa.paginaWeb,empresa.logo))})
  }
  darFormatoAProyectos(){
    this.proyectos=[];
    this.proyectosObjeto.forEach(proyecto=>{this.proyectos.push(new Proyecto(proyecto.idProyecto,proyecto.idEmpresa,proyecto.nombre,proyecto.descripcion,proyecto.modalidad,proyecto.remuneracion,new Ubicacion(proyecto.ubicacion.ciudad,proyecto.ubicacion.estado),proyecto.estadoDelProyecto,new Date(proyecto.fechaDeExpiracion)))})
    console.log(this.proyectos);
  }
  crearDatosEmpresa(){
    console.log(this.datosEmpresaObjeto);
    this.allDatosEmpresas=[];
    this.empresas.forEach(empresa => {
      console.log(empresa.getIdEmpresa());
      let indiceEmpresa = this.datosEmpresaObjeto.findIndex(datos=>{datos.idEmpresa==empresa.getIdEmpresa()});
      let datosDeLaEmpresa=this.empresasObjeto[indiceEmpresa];
      console.log(datosDeLaEmpresa);
        if(datosDeLaEmpresa){//hacer un for normal en vez de un fain 
          this.allDatosEmpresas.push(new DatosEmpresa(empresa.getIdEmpresa(),empresa.getNombre(),empresa.getOcupacionPrincipal(),empresa.getDescripcion(),empresa.getPaginaWeb(),empresa.getLogo(),datosDeLaEmpresa.giro,datosDeLaEmpresa.direccion,datosDeLaEmpresa.codigoP,datosDeLaEmpresa.localidad,datosDeLaEmpresa.municipio,datosDeLaEmpresa.estado,datosDeLaEmpresa.telOficinas,datosDeLaEmpresa.ext,datosDeLaEmpresa.telFax,datosDeLaEmpresa.jefeRH,datosDeLaEmpresa.emailDatos,datosDeLaEmpresa.jefeArea,datosDeLaEmpresa.emailArea,datosDeLaEmpresa.jefeInmediato,datosDeLaEmpresa.cargo,datosDeLaEmpresa.emailInmediato));
        }else{
          alert("no")
        }
});
    console.log(this.allDatosEmpresas);
  }
  
}