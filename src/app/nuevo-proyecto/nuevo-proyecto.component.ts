import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-nuevo-proyecto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo-proyecto.component.html',
  styleUrl: './nuevo-proyecto.component.css'
})
export class NuevoProyectoComponent {
  formulario!:FormGroup;

  constructor(){
    this.formulario=new FormGroup({
      txtNombreProyecto : new FormControl(''),
      txtDescripcion : new FormControl(''),
      optModalidad : new FormControl(''),
      txtCiudad : new FormControl(''),
      txtEstado : new FormControl(''),
      chkRemuneracion : new FormControl('')
  })
  }
  enviar(){
    nombre:String=this.formulario.get("txtNombreProyecto")?.value();
  }
}
