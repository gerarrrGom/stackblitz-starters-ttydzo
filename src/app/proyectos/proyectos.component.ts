import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Proyecto } from '../models/Proyecto';
import { LocalStorageService } from '../local-storage.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Empresa } from '../models/Empresa';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  public empresas: Empresa[] = [];
  public proyectos: Proyecto[] = [];
  public proyectosEmpresa: Proyecto[] = [];
  public formulario!: FormGroup;
  public busqueda: string = "";
  public filtro: number = -1;
  public optEmpresa: FormControl = new FormControl('');
  private idEmpresaSeleccionada!: number;

  constructor(
    private servicio: LocalStorageService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.empresas = this.servicio.getEmpresasFromDatabase(); // Esto es para probar, se reemplaza por el id de la empresa logueada.
    this.proyectos = this.servicio.getProyectosFromDatabase();

    // Inicializar controles del formulario
    this.formulario = this.fb.group({
      txtBuscar: [''],
      optFiltrar: [this.filtro]
    });

    // Suscribir al txtBuscar para filtrar
    this.formulario.get("txtBuscar")?.valueChanges.subscribe(valor => {
      this.busqueda = valor + "";
    });

    this.formulario.get("optFiltrar")?.valueChanges.subscribe(valor => {
      this.filtro = valor;
    });

    // Seleccionar la primera empresa del opt para asegurar el buen funcionamiento
    if (this.empresas.length > 0) {
      this.optEmpresa.setValue(this.empresas[0].getIdEmpresa());
      this.seleccionarNuevaEmpresa();
    }
  }

  obtenerEstado(codigoEstado: number): string {
    const estados: { [key: number]: string } = {
      0: 'Sin enviar',
      1: 'En revisión',
      2: 'Publicado',
      3: 'Comenzado',
      4: 'Terminado',
      5: 'Rechazado',
      6: 'Expirado'
    };
    return estados[codigoEstado] ?? 'Desconocido';
  }

  continuarEdicion(id: string): void {
    let indice = this.proyectos.findIndex(proyecto => proyecto.getIdProyecto() === id);
    if (indice !== -1) {
      this.servicio.guardarEnLocal("proyecto", JSON.stringify(this.proyectos[indice]));
      this.router.navigate(['/nuevoProyecto']);
    }
  }

  nuevoProyecto(): void {
    this.servicio.guardarEnLocal("idEmpresa", this.idEmpresaSeleccionada.toString());
    this.servicio.eliminarDelLocal("proyecto");
    this.router.navigate(['/nuevoProyecto']);
  }

  getProyectosBusqueda(): Proyecto[] {
    return this.proyectosEmpresa.filter(proyecto => {
      let proyectoNombre: string = proyecto.getNombre().toLowerCase();
      let proyectoId: string = proyecto.getIdProyecto().toLowerCase();
      let busquedaLower: string = this.busqueda.toLowerCase();
      return proyectoId.startsWith(busquedaLower) || proyectoNombre.startsWith(busquedaLower);
    });
  }

  seleccionarNuevaEmpresa(): void {
    this.idEmpresaSeleccionada = this.optEmpresa.value;
    this.proyectosEmpresa = this.proyectos.filter(proyecto => proyecto.getIdEmpresa() === this.idEmpresaSeleccionada);
  }
}
