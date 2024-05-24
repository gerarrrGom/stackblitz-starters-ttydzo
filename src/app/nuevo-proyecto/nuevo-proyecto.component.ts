import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-nuevo-proyecto',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo-proyecto.component.html',
  styleUrl: './nuevo-proyecto.component.css'
})
export class NuevoProyectoComponent {
  formulario!:FormGroup;
  public hasUbicacion=false;
  constructor(private fb: FormBuilder) {

    this.formulario = this.fb.group({
      txtNombreProyecto: ['', Validators.required],
      txtDescripcion: ['',Validators.required],
      optModalidad: ['', Validators.required],
      txtCiudad: ['', Validators.required],
      txtEstado: ['', Validators.required],
      chkRemuneracion: ['', Validators.required]
    });
  }
  enviar(){
    nombre:String=this.formulario.get("txtNombreProyecto")?.value();
    descripcion:String=this.formulario.get("txtNombreProyecto")?.value();
    modalidad:String=this.formulario.get("txtNombreProyecto")?.value();
    if(this.hasUbicacion){
      
    }
    ciudad:String=this.formulario.get("txtNombreProyecto")?.value();
    estado:String=this.formulario.get("txtNombreProyecto")?.value();
  }
}
